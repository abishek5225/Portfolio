import { TwitterTimelineEmbed } from "react-twitter-widgets";

const Tweets = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-full max-w-lg p-4 bg-white shadow-lg rounded-2xl border">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-4">
          Latest Tweets
        </h2>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Abishek_098"
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
};

export default Tweets;
