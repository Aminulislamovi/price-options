import PriceOption from "./PriceOption";

const PriceOptions = () => {

    
       const priceOptions = [
          {
            "id": 1,
            "name": "Basic",
            "features": [
              "Access to gym equipment",
              "Locker room access",
              "Free parking",
              "Free Wi-Fi"
            ],
            "price": 29.99,
          },
          {
            "id": 2,
            "name": "Standard",
            "features": [
              "Access to gym equipment",
              "Locker room access",
              "Free parking",
              "Free Wi-Fi",
              "Access to group classes",
              "One personal training session per month",
              "Access to the juice bar"
            ],
            "price": 49.99,
          },
          {
            "id": 3,
            "name": "Premium",
            "features": [
              "Access to gym equipment",
              "Locker room access",
              "Free parking",
              "Free Wi-Fi",
              "Access to group classes",
              "Three personal training sessions per month",
              "Access to the juice bar",
              "Access to swimming pool and sauna",
              "Guest pass privileges"
            ],
            "price": 69.99,
          },
          // {
          //   "id": 4,
          //   "name": "VIP",
          //   "features": [
          //     "Access to gym equipment",
          //     "Locker room access",
          //     "Free parking",
          //     "Free Wi-Fi",
          //     "Access to group classes",
          //     "Unlimited personal training sessions",
          //     "Access to the juice bar",
          //     "Access to swimming pool and sauna",
          //     "Guest pass privileges",
          //     "Priority class booking",
          //     "Complimentary health and fitness assessment",
          //     "Access to spa services",
          //     "Dedicated locker"
          //   ],
          //   "price": 99.99,
          // },
          // {
          //   "id": 5,
          //   "name": "Student",
          //   "features": [
          //     "Access to gym equipment",
          //     "Locker room access",
          //     "Free parking",
          //     "Free Wi-Fi",
          //     "Access to group classes"
          //   ],
          //   "price": 19.99,
          // }
        ];
      
      
    return (
        <div className="m-12">
            <h2 className="text-5xl"> Best prices in the town </h2>
            <div className="grid md:grid-cols-3 gap-6">

            {
                priceOptions.map(option => <PriceOption Key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;