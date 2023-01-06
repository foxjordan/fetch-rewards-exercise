import InputField from "./InputField";
import SelectField from "./SelectField";
import FormButton from "./FormButton";
import { sendData } from "../lib/dataMethods";
const URL = "https://frontend-take-home.fetchrewards.com/form";
const testURL = "https://webhook.site/00da8c58-f70b-4d56-8715-1568d3281da2";
export default function FormComponent() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    sendData(URL, {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      occupation: e.target.occupation.value,
      state: e.target.state.value,
    })
      .then((data) =>
        alert(
          `Thank you for registering, ${data.name}! \nThe server received the following information: \nName: ${data.name} \nEmail: ${data.email} \nPassword: ${data.password} \nOccupation: ${data.occupation} \nState: ${data.state} \nYour user ID is: ${data.id}`
        )
      )
      .catch((error) => alert("Unfortunately there was an error"));

    e.target.reset();
  };

  return (
    <div className="flex flex-col w-3/4 mg:w-1/2 mx-auto shadow-lg rounded-lg p-5 bg-[#E8F1F2] ">
      <h1 className="text-3xl font-semibold text-[#001A23] text-center">Register New User</h1>
      <form
        className="w-full mx-auto flex flex-col items-center m-2 p-2"
        onSubmit={handleSubmit}
      >
        <InputField
          label="Name"
          type="text"
          placeholder="Full Name"
          name="name"
        />
        <InputField
          label="Email"
          type="email"
          placeholder="Email"
          name="email"
        />
        <InputField
          label="Password"
          type="password"
          placeholder="Password"
          name="password"
        />
        <SelectField label="Occupation" name="occupation" />
        <SelectField label="State" name="state" />

        <FormButton>Submit</FormButton>
      </form>
    </div>
  );
}
