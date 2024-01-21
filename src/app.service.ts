import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    // faça um código que retorne um array de objetos de vagas de emprego

    return [
      {
        id: 1,
        title: 'Desenvolvedor Fullstack',
        description: 'Desenvolvedor Fullstack com experiência em React e Node',
        salary: 5000,
        company: 'Google',
        email: 'contact@google.com',
      },
      {
        id: 2,
        title: 'Desenvolvedor Frontend',
        description: 'Desenvolvedor Frontend com experiência em React',
        salary: 4000,
        company: 'Facebook',
        email: 'contact@facebook.com',
      },
      {
        id: 3,
        title: 'Desenvolvedor Backend',
        description: 'Desenvolvedor Backend com experiência em Node',
        salary: 4000,
        company: 'Facebook',
        email: '',
      },
      {
        id: 4,
        title: 'Desenvolvedor Fullstack',
        description: 'Desenvolvedor Fullstack com experiência em React e Node',
        salary: 5000,
        company: 'Google',
        email: '',
      },
    ];
  }
}
