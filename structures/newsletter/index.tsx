"use client";

import Button from "@/components/button";
import TextInput from "@/components/input";
import Input from "@/components/input";
import { FormEvent, useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({
  status,
  message,
  onValidated,
}: {
  status: "error" | "sending" | "success" | null;
  message: string | Error | null;
  onValidated: (formData: { EMAIL: string }) => void;
}) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    email;
    email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  if (status === "success")
    return (
      <p className="text-green-900 p-2 rounded bg-green-100 border border-green-300 text-center">
        Thanks for signing up!
      </p>
    );

  return (
    <div className="max-w-md flex flex-col gap-4 w-full">
      {status === "error" && (
        <p className="text-white px-4 py-2 bg-gradient-to-r from-wild-strawberry-400 to-wild-strawberry-700 text-center">
          Something went wrong. Please try again.
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-4 w-full"
      >
        <TextInput
          id="mce-EMAIL"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(value: string) => setEmail(value)}
          className="flex-grow"
        />

        <Button loading={status === "sending"}>Sign Up</Button>
      </form>
    </div>
  );
};

export default function NewsLetter() {
  const postUrl = `https://rachouan.us14.list-manage.com/subscribe/post?u=29c42e617a5374fd05bcd75e8&amp;id=dab171b941&amp;f_id=004eeee5f0`;
  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
}
