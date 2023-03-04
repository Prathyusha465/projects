
function generateQuote(){
    var quotes={
       "- Albert Einstein" : `“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it's beauty.”`,
      " - Pierce Brown ": `“Man cannot be freed by the same injustice that enslaved it.”`,
       "- Madeline Miller ": `“Bury us, and mark our names above. Let us be free.”`,
       " - Mary Astell " : `“If all men are born free, how is it that all women are born slaves?”`,
       " - John Gals worthy ": `“Life calls the tune, we dance.”`,
       " - Jamie Ford " : `“The library is like a candy store where everything is free.”`,
       " - Nenia Campbell " : `“You want to be free. You also want to be mine. You can't be both.”`
        };
     var qnames=Object.keys(quotes); 
     var author=qnames[Math.floor(Math.random()*qnames.length)];
     document.getElementById("author").innerHTML=author;
     document.getElementById("msg").innerHTML=quotes[author];
}