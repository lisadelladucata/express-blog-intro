const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Server del mio blog')
})

app.get('/bacheca', (req, res) => {
  res.json([
    {
      "titolo": "Come migliorare la produttività",
      "contenuto": "Scopri alcune tecniche per aumentare la tua produttività quotidiana, come la gestione del tempo, la focalizzazione sugli obiettivi e la gestione dello stress.",
      "immagine": "produttivita.jpg",
      "tags": ["produttività", "gestione del tempo", "efficienza"]
    },
    {
      "titolo": "Ricette veloci per una cena sana",
      "contenuto": "Impara a preparare piatti semplici e veloci che sono anche salutari, perfetti per una cena in famiglia o con amici.",
      "immagine": "cena_sana.jpg",
      "tags": ["cucina", "ricette veloci", "cena sana"]
    },
    {
      "titolo": "Guida al fitness per principianti",
      "contenuto": "Un programma completo di esercizi per chi sta iniziando il proprio percorso di allenamento. Scopri come iniziare in sicurezza e con efficacia.",
      "immagine": "fitness_principianti.jpg",
      "tags": ["fitness", "allenamento", "principianti"]
    },
    {
      "titolo": "Viaggiare in modo sostenibile",
      "contenuto": "Suggerimenti e trucchi per ridurre l'impatto ambientale durante i tuoi viaggi. Dalla scelta dei mezzi di trasporto alla gestione dei rifiuti.",
      "immagine": "viaggio_sostenibile.jpg",
      "tags": ["viaggi", "sostenibilità", "ambiente"]
    },
    {
      "titolo": "Tecniche di meditazione per rilassarsi",
      "contenuto": "Impara diverse tecniche di meditazione per alleviare lo stress e migliorare il tuo benessere mentale e fisico.",
      "immagine": "meditazione_rilassamento.jpg",
      "tags": ["meditazione", "relax", "benessere"]
    }
  ]
  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})