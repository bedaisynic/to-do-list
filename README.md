# HeadSpin Responsive Email Template

## MJML
MJML is the framework which helps to create responsive emails. It has the similar syntax like HTML. To start working on creating an email, you can download the [official desktop app](https://mjmlio.github.io/mjml-app/) to edit your email with live rendering. Or install [mjml](https://marketplace.visualstudio.com/items?itemName=attilabuti.vscode-mjml) in your code editor.

## How to use the email template

This template is designed for HeadSpin standard email. It consists of the head, header, body and footer. To create your email, you can just simply link the head, header and footer into your template, and replace the body by your content.

The template can be used like this:

```html
<mjml>
 <mj-head>
   <mj-include path="./_head.mjml" />
   <mj-style>

       Your customized styling goes there

   </mj-style>
 </mj-head>
 <mj-body>
   <mj-wrapper>
    <mj-include path="./_header.mjml" />
     <mj-section>
       <mj-column>
         <mj-text>

          	Your main content goes there

         </mj-text>
       </mj-column>
     </mj-section>
   </mj-wrapper>
   <mj-include path="./_footer.mjml" />
 </mj-body>
</mjml>
```

## How to generate HTML file

After finished on creating the email, make sure that to generate a HTML file which called a same name as MJML’s, and put it in the same folder. You can either generate it by the desktop app or export from your IDE.

For example:
```html
your_template.mjml
your_template.html
```

## MJML Documentation

If you are not sure how to use the MJML attributes when creating customized styling, head over to learn more about the built-in [attributes](https://mjml.io/documentation/).





