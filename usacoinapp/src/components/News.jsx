import React from "react";
import "../styles/index.news.css";

const News = () => {
  return (
    <div className="news-container">
      <div className="news-content">
        <div className="section-1">
          <div className="collumn-1">
            <img src="trump.jpg" className="img-news"></img>
            <div className="news-content-card">
              <div className="title-news">
                Trump says US will meet with Iran next week
              </div>
              <div className="description-news">
                President Donald Trump disputed an early US intelligence report
                on the effectiveness of the US’s strikes on Iran over the
                weekend. He also said the US will meet with Iran “next week.” An
                early US intelligence assessment that was described to CNN by
                sources briefed on it said the US strikes on three of Iran’s
                nuclear facilities did not destroy the core components of its
                nuclear program and likely only set it back by months.
              </div>
            </div>
          </div>
          <div className="collumn-2">
            A ceasefire between Iran and Israel appears to be holding Wednesday,
            despite both sides accusing the other of violating the truce in the
            hours immediately after it was announced.
          </div>
        </div>
        <div className="line">
          <div className="collumn-line">
            Trump defends Netanyahu in corruption trial — after having harsh
            words for Israel yesterday
          </div>
          <div className="collumn-line">
            Hegseth will hold a news conference tomorrow, Trump says
          </div>
          <div className="collumn-line-last">
            'A tremendous victory for everybody:' Trump on Iran strikes{" "}
          </div>
        </div>
        <div className="section-2">
          <div className="collumn-section-2">
            <div className="title-news-2">
              NATO chief clarifies earlier comments about Trump: "I didn't call
              him daddy"
            </div>
            <div className="description-news-column-2">
              NATO Secretary General Mark Rutte denied calling President Donald
              Trump “daddy” in an exclusive interview with Reuters today. Rutte
              explained that he used the word “daddy” during an earlier news
              conference with Trump, where the US president described the
              conflict between Iran and Israel as two children fighting, because
              he sometimes hears countries asking him if the US will stay with
              NATO. “And I said, that sounds a little bit like a small child
              asking his daddy, ‘hey, are you still staying with the family?’
              So, in that sense, I use ‘daddy,’ not that I was calling President
              Trump daddy,”
            </div>
          </div>
          <div className="collumn-section-2">
            he continued. More on Rutte’s comments: Earlier, Rutte offered a
            vivid description of Trump’s handling of the Middle East crisis
            during their talks today. After Trump compared the fighting sides —
            in this case, Israel and Iran — to “two kids in a school yard,”
            Rutte chimed in with his own analogy. “Then daddy has to sometimes
            use strong language,” he said. Later, Rutte dismissed a question
            about his “weak” and “demeaning” approach to Trump as a “matter of
            taste” after referring to Trump as “daddy.”
          </div>
          <div className="collumn-section-2">
            <img src="trump2.jpg" class="img-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
