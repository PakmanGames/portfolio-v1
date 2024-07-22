Contact page uses code from EmailJS:  
```
<script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
</script>
<script type="text/javascript">
   (function(){
      emailjs.init({
        publicKey: "YOUR_PUBLIC_KEY",
      });
   })();
</script>
```  
It also uses a file called `key.js` to store the keys, which include the publicKey to send the email, the service key to send by Gmail, and the template key for the email format. These values can all be found on the EmailJS dashboard.