document.addEventListener('DOMContentLoaded', function() {
    const getFact = () => {
      const url = 'https://catfact.ninja/fact';
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = function() {
        if (xhr.status === 200) {
          const fact = JSON.parse(xhr.responseText).fact;
          document.getElementById('fact').innerHTML = fact;
        } else {
          console.error(xhr.statusText);
        }
      };
      xhr.send();
    };
  
    document.getElementById('get-fact').addEventListener('click', getFact);
  });
  