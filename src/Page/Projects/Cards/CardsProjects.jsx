const CardsProjects = () => {
  return (
    <>
      <div className={`bg-ffffff block rounded-3xl p-6 w-96 my-10 2xl:my-0`}>
        <h5
          className={`text-8b3dff text-xl font-reem font-medium leading-tight mt-5 mb-2`}
        >
          Parcours professionnel
          <div className={`flex justify-start`}>
            <span className={`bg-8b3dff absolute w-32 h-1`}></span>
          </div>
        </h5>
        <p className={`text-0d1216 font-reem mb-2 w-80 lg:w-full`}>
          Passionnée par le Développement & le Design, j’ai achevé ma première
          ann2/3ée de formation, qui correspond à un bac+2. Je continue mon
          parcours en vue d’obtenir une licence UX / UI Designer pour renforcer
          mes compétences & mes connaissances. Pourquoi me suis-je reconvertie
          dans le monde digital ? Bonne question !
        </p>
      </div>
      <div className={`bg-ffffff block rounded-3xl p-6 w-96 3xl:w-2/3`}>
        <h5
          className={`text-8b3dff text-xl font-reem font-medium leading-tight mt-5 mb-2`}
        >
          Passion & Motivation
          <div className={`flex justify-start`}>
            <span className={`bg-8b3dff absolute w-32 h-1`}></span>
          </div>
        </h5>
        <p className={`text-0d1216 font-reem mb-2 w-80 lg:w-full`}>
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

export default CardsProjects;
