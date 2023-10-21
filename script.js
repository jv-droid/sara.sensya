const messages = [
  "Lovey, pasensya na sa naging resulta ng lahat. Gusto kong ayusin ito para sa iyo.",
  "Pasensya na, Lovey, at ako'y nagmamakaawa na pagtulung-tuluangan natin ang ating hindi pagkakaunawaan.",
  "Lubos akong nagsisisi sa mga aking ginawa, Lovey, at humihingi ako ng paumanhin para sa nangyari.",
  "I'm truly sorry sa ginawa ko, Lovey, at sana ay nasa iyong puso ang pagpapatawad sa akin.",
  "Nagsisisi ako kung nasaktan kita, Lovey. Hindi iyon ang aking intensyon.",
  "Ikaw ang mundo sa akin, Lovey, at ayaw kong may alitan tayo.",
  "Pasensya na sa masasakit na salita, Lovey. Hindi iyon nararapat.",
  "Pwede bang mag-usap tayo at ayusin ang lahat, Lovey? Hindi ko gusto na ganito tayo.",
  "Lovey, totoong nagsisisi ako, at humihingi ako ng tawad. Mag-usap tayo para malutas ito.",
  "Gusto kong humingi ng paumanhin sa sakit na naidulot ko, Lovey. Hindi ito dapat nangyari.",
  "I'm sorry sa aking asal, Lovey. Sana payagan mo akong ituwid ito.",
  "Lovey, ang aking mga aksyon ay walang saysay, at lubos akong nagsisisi. Pwede bang pag-usapan natin ito nang magkasama?",
  "Totoo akong nagsisisi para sa aking bahagi sa ating alitan, Lovey. Tayo'y maghanap ng paraan para mas mapabuti ito.",
  "Inaasahan ko na magpapatawad ka, Lovey. Ayaw kong magkaruon ng anumang agwat sa atin.",
  "I'm sorry, Lovey, sa sakit na naibigay ko sa iyo. Nais kong itama ito at masiguro na matatag ang ating relasyon.",
  "Nagsisisi ako, Lovey, sa sakit na nagawa ko. Sana ay magkaruon tayo ng pagkakataon na magpagalingan.",
  "Lovey, iniiyakan ko ang aking mga pagkukulang. Totoong nagsisisi ako at nagnanais na ituwid ang mga ito.",
  "Nagmamakaawa ako para sa iyong kapatawaran, Lovey. Pangako ko na matututo ako mula sa aking mga pagkakamali.",
  "Ako'y nasasaktan na dumaraan tayo sa ganitong sitwasyon, Lovey, at nagnanais na tayo'y magkasunduan upang malutas ang ating mga isyu.",
  "Pasensya na sa anumang sakit na naidulot ko, Lovey. Sana ay alam mo kung gaano kita kamahal."
];



const messageElement = document.getElementById("message");
const generateButton = document.getElementById("generateButton");

generateButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const randomMessage = messages[randomIndex];
  messageElement.innerText = randomMessage;
  messageElement.style.animation = "fadeIn 1s";
});
