# HeadSpin Responsive Email Template

## MJML
MJML is a framework which helps to create responsive emails. It has the similar syntax like HTML. To start working on editing an email, you can download the [official desktop app](https://mjmlio.github.io/mjml-app/) to modify your email with live rendering or install [mjml](https://marketplace.visualstudio.com/items?itemName=attilabuti.vscode-mjml) in your code editor if you use Visual Studio.

## How to use the HeadSpin standard email template

This basic template is created by MJML and designed for standard email of HeadSpin. It consists of the head, header, body, and footer. To create your email, you can simply link the head, header, and footer into your template and replace the body with your content.

The template can be used like this:

```html
<mjml>
 <mj-head>
   <mj-include path="./_head.mjml" />
   <mj-style>

       /* Your customized styling goes there */

   </mj-style>
 </mj-head>
 <mj-body>
   <mj-wrapper>
    <mj-include path="./_header.mjml" />

    /* Your main content goes there 

     <mj-section>
       <mj-column>
         <mj-text>
          ...
         </mj-text>
       </mj-column>
     </mj-section>
    
    */
    
   </mj-wrapper>
   <mj-include path="./_footer_manual.mjml" />
 </mj-body>
</mjml>
```

## How to generate HTML file

Once your email is created by MJML, make sure to manually generate an HTML file with the same name as MJML’s, and put it in the same folder. You can either generate it by the desktop app or export it from your IDE.

For example:

If you edit `subscription_paid.mjml` file in MJML editor, you can click `Export to HTML file` button on the top right corner to make the file.

If you modify `subscription_paid.mjml` in Visual Studio, then you can type `Command Shift P` to choose `Export HTML` to produce the file.

The structure of the folder will be like this:

```html
_head.mjml
_header.mjml
_footer_manual.mjml
subscription_paid.mjml
subscription_paid.html
```


## MJML Documentation

If you are not sure how to use the MJML attributes when creating customized styling, head over to learn more about the built-in [attributes](https://mjml.io/documentation/).





