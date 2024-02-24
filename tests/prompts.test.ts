import { getPromptDetailsFromUrl, getPromptUrl } from "src/urls";

import { getPrompt } from "src/index";

describe("Fetches data from url", () => {
  test("Fetches prompt id from url", async () => {
    const promptData = await getPromptDetailsFromUrl({
      url: "https://archiveofourown.org/collections/mo_dao_zu_shi_kink_meme_2020/prompts/2644428",
    });
    expect(promptData).toMatchObject({
      promptId: "2644428",
    });
  });

  test("Fetches collection name from url", async () => {
    const workData = await getPromptDetailsFromUrl({
      url: "https://archiveofourown.org/collections/mo_dao_zu_shi_kink_meme_2020/prompts/2644428",
    });

    expect(workData).toMatchObject({
      promptId: "2644428",
      collectionName: "mo_dao_zu_shi_kink_meme_2020",
    });
  });
});

describe("Gets url from data", () => {

  test("Gets url with collection name and prompt id", async () => {
    const workUrl = await getPromptUrl({
      promptId: "2644428",
      collectionName: "mo_dao_zu_shi_kink_meme_2020",
    });

    expect(workUrl).toBe(
      "https://archiveofourown.org/collections/mo_dao_zu_shi_kink_meme_2020/prompts/2644428"
    );
  });

});


  describe("Fetches prompt information", () => {

    test("Fetches prompt updated date", async () => {
      const prompt = await getPrompt({
        promptId: "2644428",
        collectionName: "mo_dao_zu_shi_kink_meme_2020"
      });

      expect(prompt).toMatchObject({
        updatedAt: "23 May 2022",
        summary: `<p>A big round of applause for all our prompters and fillers for making the first round of the MDZS Kink Meme on AO3 such a rousing success! If you want to submit your own prompt, the most recent round of prompts (2022) can be found <a href="https://archiveofourown.org/collections/mo_dao_zu_shi_kink_meme_2022/requests" rel="nofollow">here</a>, and any past or future rounds can be found in the MDZS Kink Meme <a href="https://archiveofourown.org/collections/mo_dao_zu_shi_kink_meme" rel="nofollow">Parent Collection</a>.</p><p> KEEP CLAIMING &amp; FILLING THESE PROMPTS! Prompts from ANY round of the MDZS Kink Meme can be filled indefinitely. We will always accept more fills for old prompts!<br> • <a href="https://archiveofourown.org/collections/mo_dao_zu_shi_kink_meme_2020/requests" rel="nofollow">2020 Prompts</a><br> • <a href="https://archiveofourown.org/collections/mo_dao_zu_shi_kink_meme_21Q1/requests" rel="nofollow">2021 Q1 Prompts</a><br> • <a href="https://archiveofourown.org/collections/mo_dao_zu_shi_kink_meme_21Q2/requests" rel="nofollow">2021 Q2 Prompts</a></p><p> Also, if you'd like to fill a <a href="https://pinboard.in/u:mdzs-kinkmeme/t:%252APROMPT_DELETED_but_can_still_be_filled_and_submitted_to_collection%2521%252A" rel="nofollow">deleted prompt</a> you found on the Pinboard, you can add it to the collection by claiming &amp; filling this prompt!</p>`
      });
    });


    test("Fetches null summary", async () => {
      const prompt = await getPrompt({
        promptId: "3566161",
        collectionName: "test_prompt_meme_2024"
      });

      expect(prompt).toMatchObject({
        summary: null,
      });
    });
    

    /*whether it actually is the updated date or the creation date is still up in the air. 
    altered an older prompt at about 5pm on 24/02/24 and it's still showing 23.
    may be slow to update. may be something else. */
/*
        authors: [{ username: "KBstories", pseud: "KBstories" }],
        title: "waiting//wishing",
        words: 36352,
        language: "English",
        rating: "Mature",
        category: ["Gen", "F/M"],
        fandoms: [
          "僕のヒーローアカデミア | Boku no Hero Academia | My Hero Academia",
        ],
        tags: {
          warnings: ["Graphic Depictions Of Violence"],
          characters: [
            "Kaminari Denki",
            "Bakugou Katsuki",
            "Kirishima Eijirou",
            "Jirou Kyouka",
            "Sero Hanta",
            "Ashido Mina",
            "Yamada Hizashi | Present Mic",
            "Class 1-A (My Hero Academia)",
          ],
          relationships: [
            "Bakugou Katsuki/Kirishima Eijirou",
            "Jirou Kyouka/Kaminari Denki",
            "Bakugou Katsuki & Kaminari Denki",
            "Ashido Mina & Bakugou Katsuki & Jirou Kyouka & Kaminari Denki & Kirishima Eijirou & Sero Hanta",
          ],
          additional: [
            "Post-Paranormal Liberation War Arc (My Hero Academia)",
            "Developing Friendships",
            "Character Study",
            "Injury Recovery",
            "Protective Bakusquad (My Hero Academia)",
            "Queerplatonic Relationships",
            "POV Kaminari Denki",
            "the romance is There but it's not the point (the point is found family)",
            "Medical Inaccuracies",
            "Some Fluff",
            "Asexual Bakugou Katsuki",
            "Post-Traumatic Stress Disorder - PTSD",
            "@ U.A. give these kids proper therapy or die by my sword",
            "Hurt/Comfort",
            "Angst with a Happy Ending",
            "Bakusquad-centric (My Hero Academia)",
            "Hospitals",
            "Anxiety",
            "POV Bakugou Katsuki",
            "(epilogue only)",
            "Canon compliant up to CH306",
            "Hurt Bakugou Katsuki",
          ],
        },
        publishedAt: "2021-01-28",
        updatedAt: "2021-03-03",
        chapters: {
          published: 7,
          total: 7,
        },
        summary:
          "<p>“<i>Bakugou will know what to do</i>. Top of the class, always quick on his feet and possessing the strongest nerves in all of 1-A – all of U.A., possibly. They’re at their most invincible with Bakugou there to hone their focus, to push them forward with that unique kind of teeth-bared tenacity Kaminari has come to rely on in the past year. When Kaminari looks, he sees–</p><p>Iida, helmet off, severe face twisted with agitation as he argues with the medics on the scene. Blood, so much blood, staining the gleaming chrome of his armor up to his neck in wet, intersecting streaks of crimson.</p><p>And in his arms, mask torn and body limp, is Bakugou Katsuki.”</p><p>In which disaster strikes, the Bakusquad comes together as a family once more, and Kaminari Denki is the MVP all the way through.</p>",
        stats: {
          bookmarks: 173,
          comments: 110,
          hits: 10903,
          kudos: 664,
        },
      });
      */
    });

