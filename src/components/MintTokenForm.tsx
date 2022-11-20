import axios from "axios";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  secret: string;
  address: string;
  id: number
}

export default function MintTokenForm() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const [btnMtText, setbtnMtText] = useState<any>("Mint Token Request");
  const onSubmit: SubmitHandler<IFormInput> = data => {
    mintTokens(data.id, data.secret, data.address);
  }

  const mintTokens = (id: number, secret: string, address: string) => {
    setbtnMtText("minting...");
    axios.post('http://localhost:5001/request-payment', {
      "id": id,
      "secret": secret,
      "receiverAddress": address 
    }).then((value) => {
      setbtnMtText("Your Payemnt Token Request Id: " + value.data);
      // setpaymentId(value.data);
      console.log(value.toString());
    }).then().catch((err: any) => {
      console.log(err);
    })
  }

  return (
    <div>
      <h1>
        Mint Tokens Request Form
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Id: 
        </label>
        <input type="number" {...register("id")} />
        <br />
        <label>
          Secret: 
        </label>
        <input {...register("secret", { pattern: /^[A-Za-z]+$/i })} />
        <br />
        <label>
          Address: 
        </label>
        <input {...register("address")} />
        <br />
        <input type="submit" value={btnMtText} />
      </form>
    </div>
  );
}