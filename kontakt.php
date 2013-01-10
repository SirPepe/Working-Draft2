<?php include('header.html') ?>


<h2>Schreibt uns!</h2>

<p>
  Fragen? Themenvorschläge? Kritik? Immer nur her damit, entweder direkt an
  <span class="email">post[AT]workingdraft[DOT]de</span> oder über das Kontaktformular:


<form id="Kontaktform">

<p>
<label for="KontaktMessage">Deine Nachricht:</label>
<textarea cols="80" rows="12" id="KontaktMessage" name="message" autofocus>Hallo,

</textarea>

<p class="short">
<label for="KontaktName">Dein Name:</label>
<input id="KontaktName" name="name" type="text">

<p class="short">
<label for="KontaktMail">Deine E-Mail-Adresse:</label>
<input id="KontaktMail" name="mail" type="mail">

<p class="submit">
<input type="submit" value="Senden!">
</form>



<?php include('footer.html') ?>