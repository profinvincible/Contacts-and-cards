



const AboutUs = () => {
  return (
    <div className="container">
      <div className="row">
        {AboutUs.map((person) => {
          return (
            <div className="col-4" key id={person.id}>
              <AboutUs {...person} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

 


