loadjs([
  'https://cdn.bootcss.com/jquery/1.11.3/jquery.min.js',
  '../assets/css/prettify.css',
  '../assets/js/prettify.min.js',
], function() {
  $(document).ready(function() {
    var htmlCode = $('#html-source')[0].outerHTML;
    var cssCode = $('#css-source')[0].innerText;
    htmlCode = $('<pre class="prettyprint linenums" lang="html">' + htmlCode.replace(/</g, '&lt;') + '</pre>');
    cssCode = $('<pre class="prettyprint linenums" lang="css">' + cssCode.replace(/\}\s+\n/g, '}\n').replace(/\n\s{8}/g,'\n') + '</pre>');
    $('body').prepend(cssCode);
    $('body').prepend(htmlCode);
    prettyPrint();
  });
});
