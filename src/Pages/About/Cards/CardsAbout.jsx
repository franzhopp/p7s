import { BsMoonStars } from "react-icons/bs";

const Cards = () => {
  return (
    <>
      <div
        data-aos="fade-in"
        className={`bg-ffffff block rounded-3xl p-6 w-96 mb-10 2xl:mb-0`}
      >
        <BsMoonStars className={`h-12 w-12`} />
        <h5
          className={`text-8b3dff text-xl font-reem font-medium leading-tight mt-5 mb-2`}
        >
          Parcours professionnel
          <div className={`flex justify-start`}>
            <span className={`bg-8b3dff absolute w-32 h-1`}></span>
          </div>
        </h5>
        <p
          className={`text-0d1216 font-reem mb-2 w-80 lg:w-full text-base lg:text-xl`}
        >
          Passionnée par le Développement & le Design, j’ai achevé ma première
          année de formation, qui correspond à un bac+2. Je continue mon
          parcours en vue d’obtenir une licence UX / UI Designer pour renforcer
          mes compétences & mes connaissances. Pourquoi me suis-je reconvertie
          dans le monde digital ? Très bonne question !
        </p>
      </div>
      <div
        data-aos="fade-in"
        className={`bg-ffffff block rounded-3xl p-6 w-96 3xl:w-2/3`}
      >
        <BsMoonStars className={`h-12 w-12`} />
        <h5
          className={`text-8b3dff text-xl font-reem font-medium leading-tight mt-5 mb-2`}
        >
          Passion & Motivation
          <div className={`flex justify-start`}>
            <span className={`bg-8b3dff absolute w-32 h-1`}></span>
          </div>
        </h5>
        <p
          className={`text-0d1216 font-reem mb-2 w-80 lg:w-full text-base lg:text-xl`}
        >
          Il y a bien longtemps, je naviguais sur des blogs que je trouvais très
          beaux. Je me suis toujours demandée comment peut-on créer un blog ou
          un site ? Cela m’a toujours fasciné de comprendre & d’identifier les
          objectifs, les besoins des utilisateurs afin d’améliorer leur parcours
          sur un site web, que ce soit une application mobile ou tout autre
          dispositif numérique. J’aime concevoir l’identité visuelle, &
          développer celle-ci avec React (ce framework est absolument mon coup
          de cœur inexplicable), j’en apprends de jour en jour, je suis
          impressionnée de voir que les languages informatiques de base ; HTML5,
          CSS3, JavaScript ont des ressources bien plus vastes. Ça me passionne.
          C’est une grande satisfaction également de répondre aux besoins des
          clients à travers cette passion, & créer des sites de qualité.
        </p>
      </div>
    </>
  );
};

export default Cards;
