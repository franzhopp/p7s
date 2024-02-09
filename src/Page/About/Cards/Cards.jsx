import { BsMoonStars } from "react-icons/bs";

const Cards = () => {
  return (
    <>
      <div className="bg-ffffff block rounded-3xl lg:w-2/1 w-1/2 p-6">
        <BsMoonStars className="h-10 w-10" />
        <h5 class="text-8b3dff text-xl font-reem font-medium leading-tight mt-5 mb-2">
          Parcours professionnel
          <div className="flex justify-start">
            <span className="absolute w-32 h-1 bg-8b3dff"></span>
          </div>
        </h5>
        <p class="font-reem mb-2 text-0d1216">
          Passionnée par le Développement & le Design, j’ai achevé ma première
          année de formation, qui correspond à un bac+2. Je continue mon
          parcours en vue d’obtenir une licence UX / UI Designer pour renforcer
          mes compétences & mes connaissances. Pourquoi me suis-je reconvertie
          dans le monde digital ? Bonne question !
        </p>
      </div>
      <div className="bg-ffffff block rounded-3xl w-2/1 p-6">
        <BsMoonStars className="h-10 w-10" />
        <h5 class="text-8b3dff text-xl font-reem font-medium leading-tight mt-5 mb-2">
          Passion & Motivation
          <div className="flex justify-start">
            <span className="absolute w-32 h-1 bg-8b3dff"></span>
          </div>
        </h5>
        <p class="font-reem mb-2 text-0d1216">
          Il y a bien longtemps je naviguais sur des blogs que je trouvais très
          beaux. Je me suis toujours demandée comment peut-on créer un blog ou
          un site ? Cela m’a toujours fasciné d’identifier les objectifs et les
          besoins des utilisateurs afin d’améliorer leur parcours sur un site
          web, que ce soit une application mobile ou tout autre dispositif
          numérique. J’aime concevoir l’identité visuelle, et développer
          celle-ci. Quelle réelle satisfaction de répondre aux besoins des
          clients et créer des sites de qualité.
        </p>
      </div>
    </>
  );
};

export default Cards;
