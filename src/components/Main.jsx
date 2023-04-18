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
    <main className="font-inter me-auto ms-auto max-w-[90%] z-10 -mt-14 lg:w-full lg:ms-0 lg:me-0 lg:px-20 lg:pr-6">
      <section className="flex flex-col gap-6 md:items-center lg:flex lg:flex-row lg:justify-between">
        <SocialCards
          stylesHead={styles.blue}
          socialImage={
            "https://res.cloudinary.com/ddgyd8szc/image/upload/v1681807877/icon-facebook_huppxn.svg"
          }
          userName=" @nathanf"
          followers={1987}
          arrowhead={
            "https://res.cloudinary.com/ddgyd8szc/image/upload/v1681807877/icon-up_brn39t.svg"
          }
          todayfollow={12}
          textstyle={styles.green}
        />
        <SocialCards
          stylesHead={styles.twitter}
          socialImage={
            "https://res.cloudinary.com/ddgyd8szc/image/upload/v1681807877/icon-twitter_yoxlf5.svg"
          }
          userName=" @nathanf"
          followers={1044}
          arrowhead={
            "https://res.cloudinary.com/ddgyd8szc/image/upload/v1681807877/icon-up_brn39t.svg"
          }
          todayfollow={99}
          textstyle={styles.green}
        />
        <SocialCards
          stylesHead={styles.instagram}
          socialImage={
            "https://res.cloudinary.com/ddgyd8szc/image/upload/v1681807877/icon-instagram_w1ofnt.svg"
          }
          userName=" @realnathanf"
          followers={"11k"}
          arrowhead={
            "https://res.cloudinary.com/ddgyd8szc/image/upload/v1681807877/icon-up_brn39t.svg"
          }
          todayfollow={1099}
          textstyle={styles.green}
        />
        <SocialCards
          stylesHead={styles.youtube}
          socialImage={
            "https://res.cloudinary.com/ddgyd8szc/image/upload/v1681807878/icon-youtube_gdi6pt.svg"
          }
          userName=" @Nathan f"
          followers={8239}
          arrowhead={
            "https://res.cloudinary.com/ddgyd8szc/image/upload/v1681807877/icon-down_n7c8rq.svg"
          }
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
              img={
                "https://res.cloudinary.com/ddgyd8szc/image/upload/v1681807877/icon-facebook_huppxn.svg"
              }
              likesAmount={87}
              arrow={
                "https://res.cloudinary.com/ddgyd8szc/image/upload/v1681807877/icon-up_brn39t.svg"
              }
              percentage={3}
              percentTextColor={styles.green}
            />
            <Overview
              likes={"Likes"}
              img={
                "https://res.cloudinary.com/ddgyd8szc/image/upload/v1681807877/icon-facebook_huppxn.svg"
              }
              likesAmount={52}
              arrow={
                "https://res.cloudinary.com/ddgyd8szc/image/upload/v1681807877/icon-down_n7c8rq.svg"
              }
              percentage={25}
              percentTextColor={styles.red}
            />
            <Overview
              likes={"Likes"}
              img={
                "https://res.cloudinary.com/ddgyd8szc/image/upload/v1681807877/icon-instagram_w1ofnt.svg"
              }
              likesAmount={5462}
              arrow={
                "https://res.cloudinary.com/ddgyd8szc/image/upload/v1681807877/icon-up_brn39t.svg"
              }
              percentage={2257}
              percentTextColor={styles.green}
            />
            <Overview
              likes={"Profile Views"}
              img={
                "https://res.cloudinary.com/ddgyd8szc/image/upload/v1681807877/icon-instagram_w1ofnt.svg"
              }
              likesAmount={"52k"}
              arrow={
                "https://res.cloudinary.com/ddgyd8szc/image/upload/v1681807877/icon-up_brn39t.svg"
              }
              percentage={1375}
              percentTextColor={styles.green}
            />
          </div>
          <div className="flex flex-col gap-4 lg:flex lg:flex-row md:items-center  lg:justify-between">
            <Overview
              likes={"Retweets"}
              img={
                "https://res.cloudinary.com/ddgyd8szc/image/upload/v1681807877/icon-twitter_yoxlf5.svg"
              }
              likesAmount={117}
              arrow={
                "https://res.cloudinary.com/ddgyd8szc/image/upload/v1681807877/icon-up_brn39t.svg"
              }
              percentage={303}
              percentTextColor={styles.green}
            />
            <Overview
              likes={"Likes"}
              img={
                "https://res.cloudinary.com/ddgyd8szc/image/upload/v1681807877/icon-twitter_yoxlf5.svg"
              }
              likesAmount={507}
              arrow={
                "https://res.cloudinary.com/ddgyd8szc/image/upload/v1681807877/icon-up_brn39t.svg"
              }
              percentage={553}
              percentTextColor={styles.green}
            />
            <Overview
              likes={"Likes"}
              img={
                "https://res.cloudinary.com/ddgyd8szc/image/upload/v1681807878/icon-youtube_gdi6pt.svg"
              }
              likesAmount={107}
              arrow={
                "https://res.cloudinary.com/ddgyd8szc/image/upload/v1681807877/icon-down_n7c8rq.svg"
              }
              percentage={19}
              percentTextColor={styles.red}
            />
            <Overview
              likes={"Total Views"}
              img={
                "https://res.cloudinary.com/ddgyd8szc/image/upload/v1681807878/icon-youtube_gdi6pt.svg"
              }
              likesAmount={1407}
              arrow={
                "https://res.cloudinary.com/ddgyd8szc/image/upload/v1681807877/icon-down_n7c8rq.svg"
              }
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
