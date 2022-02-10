// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "8666dfa2c161d80b38868d63bca783dc-us13",
  server: "us13",
});

export default async function handler(req, res) {
  const response = await mailchimp.lists.addListMember("90c61ea7f7", {
    email_address: "babka@lancka.pl",
    status: "subscribed",
    merge_fields: {
      FNAME: "Marianna",
    },
  });
  console.log(response);
  res.status(200).json({ name: "John Doe" });
}
