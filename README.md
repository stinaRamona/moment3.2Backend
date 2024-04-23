<h1>Moment 3.2 Backendbaserad webbutveckling</h1>
I detta moment har ett enkelt API skapats med Express. Databasen som API:et är anslutet till är en MongoDB databas. 
Anslutningen är skapad med hjälp av mongoose och scheman. 

<h2>Anrop som kan göras till API:et:</h2>
<table>
  <thead>
    <th>Metod</th>
    <th>Ändpunkt</th>
    <th>Beskrivning</th>
  </thead> 
  <tbody>
    <tr>
      <td>GET</td>
      <td>/workexps</td>
      <td>Hämtar all data som finns sparat i API:et</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/workexps</td>
      <td>Lägger till ny erfarenhet i API:et</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/workexp/:_id</td>
      <td>Raderar värdet med angivet id</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/workexps/:_id</td>
      <td>Uppdaterar värde med angivet id</td>
    </tr>
  </tbody>
</table> 

Svaret från API:et kommer i JSON-format: 
```
  {
    "_id": "66277340dc818dfe14117b7c",
    "workplace": "Flygvapenmuseum",
    "title": "Receptionist",
    "location": "Linköping",
    "description": "Receptionsarbete"
  },
```
