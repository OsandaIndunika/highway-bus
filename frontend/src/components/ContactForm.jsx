import {
  Form,
  Input,
  Select,
  SelectItem,
  Checkbox,
  Button,
} from "@heroui/react";
import React from "react";

export default function ContactForm() {
  const [password, setPassword] = React.useState("");
  const [submitted, setSubmitted] = React.useState(null);
  const [errors, setErrors] = React.useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    // Custom validation checks
    const newErrors = {};

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      return;
    }

    setErrors({});
    setSubmitted(data);
  };

  return (
    <div className="py-10 md:py-12 lg:py-16">
      <div className="flex flex-col pb-10 items-center justify-center text-center">
        <h3 className="font-bold text-2xl uppercase leading-relaxed">
          Contact Section
        </h3>
        <p>We&apos;d love to hear from you</p>
      </div>
      <Form
        className="justify-center items-center space-y-4 z-[-20]"
        validationBehavior="native"
        validationErrors={errors}
        onReset={() => setSubmitted(null)}
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-4 max-w-lg">
          <Input
            isRequired
            errorMessage={({ validationDetails }) => {
              if (validationDetails.valueMissing) {
                return "Please enter your name";
              }

              return errors.name;
            }}
            label="Name"
            labelPlacement="outside"
            name="name"
            placeholder="Enter your name"
            className="z-[-20]"
          />

          <Input
            isRequired
            errorMessage={({ validationDetails }) => {
              if (validationDetails.valueMissing) {
                return "Please enter your email";
              }
              if (validationDetails.typeMismatch) {
                return "Please enter a valid email address";
              }
            }}
            label="Email"
            labelPlacement="outside"
            name="email"
            placeholder="Enter your email"
            type="email"
            className="z-[-20]"
          />

          <Input
            isRequired
            errorMessage={({ validationDetails }) => {
              if (validationDetails.valueMissing) {
                return "Please enter your contact number";
              }
            }}
            label="Contact"
            labelPlacement="outside"
            name="contact"
            placeholder="Enter your contact number"
            type="text"
            className="z-[-20]"
          />
          <Input
            isRequired
            errorMessage={({ validationDetails }) => {
              if (validationDetails.valueMissing) {
                return "Please enter your message";
              }
            }}
            label="Message"
            labelPlacement="outside"
            name="message"
            placeholder="Enter your Message"
            type="text"
            className="z-[-20]"
          />

          {errors.terms && (
            <span className="text-danger text-small">{errors.terms}</span>
          )}

          <div className="flex gap-4">
            <Button className="w-full" color="primary" type="submit">
              Submit
            </Button>
          </div>
        </div>

        {submitted && (
          <div className="text-small text-default-500 mt-4">
            Submitted data: <pre>{JSON.stringify(submitted, null, 2)}</pre>
          </div>
        )}
      </Form>
    </div>
  );
}
