// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API,
  server: "us13",
});

export default async function handler(req, res) {
  const { email, name } = JSON.parse(req.body);

  const response = await mailchimp.lists.addListMember(
    process.env.MAILCHIMP_LIST_ID,
    {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: name,
      },
    }
  );

  console.log(
    `Successfully added contact as an audience member. The contact's id is ${response.id}.`
  );

  res.status(200).json({ success: true, data: response });
}
