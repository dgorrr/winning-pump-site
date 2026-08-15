import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
console.log("API ROUTE LOADED");


export async function POST(req: Request) {

  try {

    const data = await req.json();


    const result = await resend.emails.send({

      from: "onboarding@resend.dev",

      to: "qq727599117@gmail.com",

      subject: "New Winning Pumps Inquiry",

      html: `

<div style="font-family:Arial,sans-serif;color:#1f2937">

<h2 style="color:#0f172a">
NEW WEBSITE INQUIRY
</h2>

<hr/>

<h3>
Customer Information
</h3>


<p>
<strong>Name:</strong>
${data.name}
</p>


<p>
<strong>Email:</strong>
${data.email}
</p>


<p>
<strong>Company:</strong>
${data.company || "Not provided"}
</p>



<h3>
Inquiry Details
</h3>


<p>
<strong>Subject:</strong>
${data.subject}
</p>


<p>
<strong>Message:</strong>
</p>


<p>
${data.message}
</p>



<hr/>


<p style="color:#64748b;font-size:12px">

Submitted from:
Winning Pumps Website

</p>


</div>

`

    });

    await resend.emails.send({

  from:
  "onboarding@resend.dev",


  to:
  data.email,


  subject:
  "Thank you for contacting Winning Pumps",


  html:

  `

  <div style="font-family:Arial,sans-serif;color:#333">


  <h2>
  Thank you for contacting Winning Pumps
  </h2>


  <p>
  Dear ${data.name},
  </p>


  <p>
  We have received your inquiry successfully.
  </p>


  <p>
  Our engineering team will review your requirements
  and reply as soon as possible.
  </p>


  <p>
  For urgent requests, please contact our sales team.
  </p>


  <br/>


  <p>
  Best regards,
  </p>


  <p>
  Winning Pumps Team
  </p>


  </div>

  `

});


    console.log(result);


    return Response.json({
      success:true
    });


  } catch(error){

    console.error(error);


    return Response.json(
      {
        success:false
      },
      {
        status:500
      }
    );

  }

}