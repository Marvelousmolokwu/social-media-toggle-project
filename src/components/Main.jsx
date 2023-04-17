import Overview from "./Overview";
import SocialCards from "./SocialCards";

const Main = () => {
  const styles = {
    red: "text-BrightRed",
    green: "text-LimeGreen",
    blue: "bg-Facebook",
    youtube: "bg-YouTube",
    instagram: "bg-gradient-to-r from-Instagram to-InstagramII",
    twitter: "bg-Twitter",
  };
  return (
    <main className="me-auto ms-auto max-w-[90%] z-10 -mt-14 lg:w-full lg:ms-0 lg:me-0 lg:px-20 lg:pr-6">
      <section className="flex flex-col gap-6 md:items-center lg:flex lg:flex-row lg:justify-between">
        <SocialCards
          stylesHead={styles.blue}
          socialImage={"/src/images/icon-facebook.svg"}
          userName=" @nathanf"
          followers={1987}
          arrowhead={"/src/images/icon-up.svg"}
          todayfollow={12}
          textstyle={styles.green}
        />
        <SocialCards
          stylesHead={styles.twitter}
          socialImage={"/src/images/icon-twitter.svg"}
          userName=" @nathanf"
          followers={1044}
          arrowhead={"/src/images/icon-up.svg"}
          todayfollow={99}
          textstyle={styles.green}
        />
        <SocialCards
          stylesHead={styles.instagram}
          socialImage={"/src/images/icon-instagram.svg"}
          userName=" @realnathanf"
          followers={"11k"}
          arrowhead={"/src/images/icon-up.svg"}
          todayfollow={1099}
          textstyle={styles.green}
        />
        <SocialCards
          stylesHead={styles.youtube}
          socialImage={"/src/images/icon-youtube.svg"}
          userName=" @Nathan f"
          followers={8239}
          arrowhead={"/src/images/icon-down.svg"}
          todayfollow={144}
          textstyle={styles.red}
        />
      </section>
      <section className="pb-6">
        <h2 className="text-3xl  font-bold text-slate-700 py-6 md:text-center lg:text-left ">
          Overview Today
        </h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 lg:flex lg:flex-row md:items-center  lg:justify-between">
            <Overview
              likes={"Page Views"}
              img={"/src/images/icon-facebook.svg"}
              likesAmount={87}
              arrow={"/src/images/icon-up.svg"}
              percentage={3}
              percentTextColor={styles.green}
            />
            <Overview
              likes={"Likes"}
              img={"/src/images/icon-facebook.svg"}
              likesAmount={52}
              arrow={"/src/images/icon-down.svg"}
              percentage={25}
              percentTextColor={styles.red}
            />
            <Overview
              likes={"Likes"}
              img={"/src/images/icon-instagram.svg"}
              likesAmount={5462}
              arrow={"/src/images/icon-up.svg"}
              percentage={2257}
              percentTextColor={styles.green}
            />
            <Overview
              likes={"Profile Views"}
              img={"/src/images/icon-instagram.svg"}
              likesAmount={"52k"}
              arrow={"/src/images/icon-up.svg"}
              percentage={1375}
              percentTextColor={styles.green}
            />
          </div>
          <div className="flex flex-col gap-4 lg:flex lg:flex-row md:items-center  lg:justify-between">
            <Overview
              likes={"Retweets"}
              img={"/src/images/icon-twitter.svg"}
              likesAmount={117}
              arrow={"/src/images/icon-up.svg"}
              percentage={303}
              percentTextColor={styles.green}
            />
            <Overview
              likes={"Likes"}
              img={"/src/images/icon-twitter.svg"}
              likesAmount={507}
              arrow={"/src/images/icon-up.svg"}
              percentage={553}
              percentTextColor={styles.green}
            />
            <Overview
              likes={"Likes"}
              img={"/src/images/icon-youtube.svg"}
              likesAmount={107}
              arrow={"/src/images/icon-down.svg"}
              percentage={19}
              percentTextColor={styles.red}
            />
            <Overview
              likes={"Total Views"}
              img={"/src/images/icon-youtube.svg"}
              likesAmount={1407}
              arrow={"/src/images/icon-down.svg"}
              percentage={12}
              percentTextColor={styles.red}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
