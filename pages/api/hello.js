// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "0ac0f50a7bae92880a2ca6464042c7c1-us13",
  server: "us13",
});

export default async function handler(req, res) {
  const { email, name } = JSON.parse(req.body);
  // const response = await fetch(
  //   "https://us13.api.mailchimp.com/2.0/lists/subscribe.json?apikey=8666dfa2c161d80b38868d63bca783dc-us13&id=90c61ea7f7&email[email]=lancka@francka.pl&merge_vars[FNAME]=Maria&double_optin=false&send_welcome=false"
  // );

  // if (response) {
  //   const json = await response.json();
  //   res.status(200).json({ success: true, data: response });
  // } else {
  //   res.status(400).json({
  //     success: false,
  //   });
  // }

  const response = await mailchimp.lists.addListMember("90c61ea7f7", {
    email_address: email,
    status: "subscribed",
    merge_fields: {
      FNAME: name,
    },
  });

  console.log(
    `Successfully added contact as an audience member. The contact's id is ${response.id}.`
  );

  res.status(200).json({ success: true, data: response });
}
