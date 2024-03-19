function KeyPoints() {
  return (
    <section className="grid grid-cols-3 gap-8">
      <div className=" col-span-2 min-h-40 bg-custom-purple rounded-xl flex flex-col transition-all hover:translate-y-1">
        <h2 className="text-xs text-custom-bg font-medium tracking-wider self-end pt-4 px-6 ">
          Working with
        </h2>
        <h1 className="text-custom-bg font-medium tracking-wider text-xl self-end px-6">
          API GATEWAYS
        </h1>
      </div>
      <div className="col-span-1 min-h-40 bg-custom-malibu rounded-xl flex flex-col transition-all hover:translate-y-1">
        <h2 className="text-xs text-custom-bg font-medium tracking-wider self-end pt-4 px-6 ">
          Thoughts and Philosophy
        </h2>
        <h1 className="text-custom-bg font-medium tracking-wider text-xl self-end px-6">
          BLOG
        </h1>
      </div>
      <div className="col-span-1 min-h-40 bg-custom-whiskey rounded-xl flex flex-col transition-all hover:translate-y-1">
        <h2 className="text-xs text-custom-bg font-medium tracking-wider self-end pt-4 px-6 ">
          Tinkering
        </h2>
        <h1 className="text-custom-bg font-medium tracking-wider text-xl self-end px-6">
          PROJECTS
        </h1>
      </div>
      <div className="col-span-2 min-h-40 bg-custom-coral rounded-xl flex flex-col transition-all hover:translate-y-1">
        <h2 className="text-xs text-custom-bg font-medium tracking-wider self-end pt-4 px-6 ">
          Day to Day
        </h2>
        <h1 className="text-custom-bg font-medium tracking-wider text-xl self-end px-6">
          WORK
        </h1>
      </div>
    </section>
  );
}

export default KeyPoints;