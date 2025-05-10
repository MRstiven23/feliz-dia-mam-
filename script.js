function mostrarSorpresa() {
    const mensajes = [
      "¡Te amo hasta la luna, ida y vuelta!",
      "Gracias por tu amor infinito.",
      "Sin ti no soy nada, mamá.",
      "Este regalo lo hice yo... ¡con código y corazón!",
      "todo lo que soy es por tu esfuerzo!!",
      "sigue siendo exelente en todo ",
      "Eres mi fuerza y mi inspiración, mamá.",
      "Cada día contigo es el mejor regalo que la vida me da.",
      "Un abrazo tuyo vale más que todo el oro del mundo.",
      "Mi vida está llena de bendiciones, y tú eres la mayor de todas.",
      "Lo que soy, lo debo todo a ti. Gracias por ser mi todo.",
      "Gracias por enseñarme que los sueños se alcanzan con amor y perseverancia."
    ];
    
    const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
    document.getElementById("mensaje-secreto").innerText = mensaje;
  }
  