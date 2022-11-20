import axios from "axios";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  value: number;
  secret: string;
}

export default function TokenRequestForm() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const [btnPtText, setbtnPtText] = useState<any>("Payment Order Request");
  const [paymentId, setpaymentId] = useState<any>(0);
  const onSubmit: SubmitHandler<IFormInput> = data => {
    paymentOrderRequest(data.value, data.secret);
  }
   
  const paymentOrderRequest = (value: number, secret: string) => {
    setbtnPtText("requesting...");
    axios.post('http://localhost:5001/payment-order', {
      "value": value,
      "secret": secret
    }).then((value) => {
      setpaymentId(value.data);
      setbtnPtText("Your Payemnt Token Request Id: " + paymentId);
      console.log(value.toString());
    }).then().catch((err: any) => {
      console.log(err);
    })
  }

  return (
    <div>
      <h1>
        Payment Request Form
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Value: 
        </label>
        <input type="number" {...register("value", { min: 1, max: 10 })} />
        <br />
        <label>
          Secret: 
        </label>
        <input {...register("secret", { pattern: /^[A-Za-z]+$/i })} />
        <br />
        <input type="submit" value={btnPtText} />
      </form>
    </div>
  );
}