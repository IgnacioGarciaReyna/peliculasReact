import React from "react";

const Providers = ({ providers }) => {
  return (
    <div>
      {providers.AR && providers.AR.rent
        ? providers.AR.rent.map((provider) => (
            <p key={provider.id} className="text-white">
              {provider.provider_name}
            </p>
          ))
        : null}
    </div>
  );
};

export default Providers;
