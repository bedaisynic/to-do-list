# HeadSpin Responsive Email Template

## MJML
MJML is a framework which helps to create responsive emails. It has similar syntax like HTML. To start working on editing an email, you can download the [official desktop app](https://mjmlio.github.io/mjml-app/) to modify your email with live rendering or install [mjml](https://marketplace.visualstudio.com/items?itemName=attilabuti.vscode-mjml) in your code editor if you use Visual Studio.

## How to use HeadSpin standard email template

This basic template is written in MJML and designed for a standard email template for HeadSpin. It consists of four main components : head, header, body, and footer. To create your custom email, you can reuse the head, header, and footer from this template and replace the body with your own content.

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

Once your email in MJML is created, make sure to generate a corrsponding HTML file with the same file name, and put it under the same directory. You can either generate it by the desktop app or export it from your IDE.

For example:

* If you want to generate `subscription_paid.html` in MJML editor(desktop app), you can click `Export to HTML file` button on the top right corner to generate the file.

* If you want to generate `subscription_paid.html` in Visual Studio, then you can type `Command Shift P` to choose `Export HTML` to export the file.

In this example, the folder will look something similar to this:

```html
_head.mjml
_header.mjml
_footer_manual.mjml
subscription_paid.mjml
subscription_paid.html
```


## MJML Documentation

If you are not sure how to use the MJML attributes when creating customized styling, head over to learn more about the built-in [attributes](https://mjml.io/documentation/).





