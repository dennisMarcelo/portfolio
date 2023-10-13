const ALFABETO = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';

export function geradorNumeroAleatorio(nInicial: number, nFinal: number) {
  return Math.floor(Math.random() * nFinal) + nInicial;
}

export function geradorCaracteresAleatorio(qtdCaracteres: number) {
  const alfabetoArray = ALFABETO.split(' ');
  let caracteresAleatorios = '';

  for (let i = 0; i < qtdCaracteres; i += 1) {
    const boleanAleatorio = geradorNumeroAleatorio(0, 2);

    if (boleanAleatorio) {
      caracteresAleatorios += geradorNumeroAleatorio(0, 9);
    } else {
      const numeroAleatorio = geradorNumeroAleatorio(0, 26);
      caracteresAleatorios += alfabetoArray[numeroAleatorio];
    }
  }

  return caracteresAleatorios;
}
