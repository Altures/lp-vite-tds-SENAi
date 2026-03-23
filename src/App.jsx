import { useState } from 'react'
import s from './App.module.css'
import { Card } from './components/card'
import cardImg1 from '/drible.jpg'
import cardImg2 from '/dunk.webp'
import cardImg3 from '/fem.webp'

// quando se tem uma rota, usa function app
function App() {

  const enviar = () => {
    const mensagem = `Gostaria de entrar em contato! \n\nNome: ${nome}\nAssunto: ${assunto}`
    const msg = encodeURIComponent(mensagem)
    window.open(`https://wa.me/5541997049516?text=${msg}`)
  }

  const [nome, setNome] = useState("")
  const [assunto, setAssunto] = useState("")

  return (
    <>
      <nav>
        <a href="#s1">primeira</a>
        <a href="#s2">segunda</a>
        <a href="#s3">terceira</a>
        <a href="#s4">quarta</a>

      </nav>
      <main>
        <section id="s1" className={s.s1}>
          <div className={s.imgSide}>
            <img src="/bola.png" alt="" />
          </div>
          <div className={s.textSide}>
            <h1>Bola</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veritatis aliquam, labore id quo itaque voluptatem at neque. Sint, nulla. Placeat ipsam dignissimos distinctio ratione suscipit omnis asperiores fugiat tempore!</p>
          </div>
        </section>
        <section id="s2" className={s.s2}>
          <Card imgSrc={cardImg1}
            alt="Card img 1"
            title="Card1"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veritatis aliquam, labore id quo itaque voluptatem at neque. Sint, nulla. Placeat ipsam dignissimos distinctio ratione suscipit omnis asperiores fugiat tempore!"
          />
          <Card imgSrc={cardImg2}
            alt="Card img 2"
            title="Card2"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veritatis aliquam, labore id quo itaque voluptatem at neque. Sint, nulla. Placeat ipsam dignissimos distinctio ratione suscipit omnis asperiores fugiat tempore!"
          />
          <Card imgSrc={cardImg3}
            alt="Card img 3"
            title="Card3"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veritatis aliquam, labore id quo itaque voluptatem at neque. Sint, nulla. Placeat ipsam dignissimos distinctio ratione suscipit omnis asperiores fugiat tempore!"
          />

        </section>
        <section id="s3" className={s.s3}>
          <h2>teste</h2>
        </section>
        <section id="s4" className={s.s4}>
          <h2>Contato</h2>
          <div className={s.formulario}>
            <label htmlFor="nome">Nome</label>
            <input  value={nome} 
                    onChange={(e) => {setNome(e.target.value)}} 
                    type="text" id="nome" 
                    placeholder="insira seu nome" />
            <label htmlFor="assunto">Mensagem</label>
            <textarea value={assunto} 
                      onChange={(e) => {setAssunto(e.target.value)}} 
                      id="assunto" 
                      placeholder="insira sua mensagem"></textarea>
            <button className={s.btn} onClick={enviar}>ENVIAR</button>
          </div>
        </section>
      </main>
      <footer>
        <a href="https://facebook.com" target="_blank"><i className={"fa-brands fa-facebook"}></i></a>
        <a href="https://instagram.com" target="_blank"><i className={"fa-brands fa-instagram"}></i></a>
        <a href="https://linkedin.com" target="_blank"><i className={"fa-brands fa-linkedin"}></i></a>
        <a href="https://github.com" target="_blank"><i className={"fa-brands fa-github"}></i></a>
      </footer>
    </>
  )
}

export default App
