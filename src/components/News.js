import React, { Component } from 'react'
import NewsItem from './NewsItem'
import './css/news.css'

export class News extends Component {
    articles = [
        {
            "source": {
            "id": null,
            "name": "CNBC"
            },
            "author": "Paulina Likos",
            "title": "Jim Cramer worries about a UAW strike at Ford. But it's not all doom and gloom at the automaker",
            "description": "Due to growing concerns about a potential strike, Jim Cramer said he is \"not in a hurry to buy\" more Ford.",
            "url": "https://www.cnbc.com/2023/08/15/cramer-worries-about-a-uaw-strike-but-its-not-all-doom-and-gloom-at-ford.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107252078-1686077384691-gettyimages-1240263023-DET054.jpeg?v=1692118962&w=1920&h=1080",
            "publishedAt": "2023-08-15T17:02:42Z",
            "content": "Jim Cramer is cautious about Ford (F) due to the heightened risk of a United Auto Workers strike, which has been a recent overhang on the Club stock. But, Jim is encouraged by the automaker's electri… [+5841 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "reuters.com",
            "title": "Fisker to add Tesla's EV charging connector by 2025",
            "description": "The logo of Fisker Automotive is pictured on a car at the 2022 Paris Auto Show in Paris, France, October 18, 2022. REUTERS/Stephane Mahe Aug 15 (Reuters) - Electric vehicle startup Fisker (FSR.N) said on Tuesday it signed a deal with Tesla (TSLA.O) to adopt i…",
            "url": "https://biztoc.com/x/1acc6c4aaa15da11",
            "urlToImage": "https://c.biztoc.com/p/1acc6c4aaa15da11/og.webp",
            "publishedAt": "2023-08-15T16:58:07Z",
            "content": "The logo of Fisker Automotive is pictured on a car at the 2022 Paris Auto Show in Paris, France, October 18, 2022. REUTERS/Stephane MaheAug 15 (Reuters) - Electric vehicle startup Fisker (FSR.N) said… [+304 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Yahoo Entertainment"
            },
            "author": "Yiannis Zourmpanos",
            "title": "Tesla: Triumphs and Challenges",
            "description": "Record deliveries, pricing woes and promising trajectory",
            "url": "https://finance.yahoo.com/news/tesla-triumphs-challenges-164807831.html",
            "urlToImage": "https://media.zenfs.com/en/us.finance.gurufocus/8ba82588d577ce93efedc1c28e0acbe7",
            "publishedAt": "2023-08-15T16:48:07Z",
            "content": "In the dynamic landscape of electric vehicle manufacturing, Tesla Inc.'s (NASDAQ:TSLA) second-quarter performance is a testament to its triumphs and hurdles. The period witnessed an impressive surge … [+6252 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Yahoo Entertainment"
            },
            "author": "Yiannis Zourmpanos",
            "title": "Tesla: Triumphs & Challenges",
            "description": "Record Deliveries, Pricing Woes, and Promising Trajectory",
            "url": "https://finance.yahoo.com/news/tesla-triumphs-challenges-164807437.html",
            "urlToImage": "https://media.zenfs.com/en/us.finance.gurufocus/8ba82588d577ce93efedc1c28e0acbe7",
            "publishedAt": "2023-08-15T16:48:07Z",
            "content": "In the dynamic landscape of electric vehicle (EV) manufacturing, Tesla Inc (NASDAQ:TSLA)'s Q2 2023 performance is a testament to its triumphs and hurdles. The period witnessed an impressive surge in … [+6848 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "New York Post"
            },
            "author": "Reuters",
            "title": "Tesla launches cheaper Model S, X versions with shorter driving ranges",
            "description": "The new S and X \"standard range\" models are priced at $78,490 and $88,490, respectively.",
            "url": "https://nypost.com/2023/08/15/tesla-launches-cheaper-model-s-x-versions-with-shorter-driving-ranges/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/08/tesla-elon-musk-new-models.jpg?quality=75&strip=all&1692102081&w=1024",
            "publishedAt": "2023-08-15T16:39:04Z",
            "content": "Tesla  launched cheaper variants of its Model S sedan and Model X SUV with shorter driving ranges in the US, looking to increase sales as high borrowing costs hamper demand for expensive electric veh… [+1986 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Fark.com"
            },
            "author": null,
            "title": "\"Many of us went into this evaluation wary of the cultlike vibes from the Teslarati,...But our job is to evaluate cars, not the people who make, own, or love them, and there is no denying the Tesla Model Y is very, very good\" [Interesting]",
            "description": "\"Many of us went into this evaluation wary of the cultlike vibes from the Teslarati,...But our job is to evaluate cars, not the people who make, own, or love them, and there is no denying the Tesla Model Y is very, very good\"",
            "url": "https://www.fark.com/comments/12958926/Many-of-us-went-into-this-evaluation-wary-of-cultlike-vibes-from-TeslaratiBut-our-job-is-to-evaluate-cars-not-people-who-make-own-love-them-there-is-no-denying-Tesla-Model-Y-is-very-very-good",
            "urlToImage": "https://usrimg-full.fark.net/0/0Y/fark_0YTe1ofAonSGgG9luAQbkW5ppVo.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1692590400&Signature=2JUV2k1LMnMqZQnzRUDXTOzBptk%3D",
            "publishedAt": "2023-08-15T16:35:08Z",
            "content": "<li>Links are submitted by members of the Fark community.\r\n</li><li>When community members submit a link, they also write a custom headline for the story.\r\n</li><li>Other Farkers comment on the links… [+177 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "CleanTechnica"
            },
            "author": "Guest Contributor",
            "title": "How Much Does It Cost To Have A Tesla Powerwall Installed?",
            "description": "The Tesla Powerwall is an energy storage system that pairs with solar panels to offer backup power storage to your home. In addition to reducing a homeowner’s reliance on the electrical grid, the Powerwall lets users monitor and manage their backup power, eve…",
            "url": "https://cleantechnica.com/2023/08/15/how-much-does-it-cost-to-have-a-tesla-powerwall-installed/",
            "urlToImage": "http://cleantechnica.com/files/2023/09/2023.08-Tesla-Takeover-2023-California-04-tesla-energy-solar-roof-powerwall-scaled.jpg",
            "publishedAt": "2023-08-15T16:32:25Z",
            "content": "The Tesla Powerwall is an energy storage system that pairs with solar panels to offer backup power storage to your home. In addition to reducing a homeowners reliance on the electrical grid, the Powe… [+3326 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "finance.yahoo.com",
            "title": "Vietnamese EV maker VinFast's shares surge in Nasdaq debut",
            "description": "Shares in Vietnamese electric vehicle maker VinFast surged on their Nasdaq debut on Tuesday after the company closed its merger with a special purpose acquisition company (SPAC) and signalled it was open to raising additional capital. The stock opened at $22,…",
            "url": "https://biztoc.com/x/932a4f1b5b801194",
            "urlToImage": "https://c.biztoc.com/p/932a4f1b5b801194/og.webp",
            "publishedAt": "2023-08-15T16:30:12Z",
            "content": "Shares in Vietnamese electric vehicle maker VinFast surged on their Nasdaq debut on Tuesday after the company closed its merger with a special purpose acquisition company (SPAC) and signalled it was … [+298 chars]"
            },
    ]
    constructor(){
        super();
        console.log("Hello i am constructor from News component")
        this.state= {
            articles: this.articles
        }
    }
    
    render() {
        return (
            <>
            <div className="conatiner">
                <h2>Today's Top Headlines </h2><h6>Your daily dose of news!!</h6>
                
                
                <div className="row">
                {this.state.articles.map((element)=>{
            return  <div className="col-md-4" key={element.url} >
                    <NewsItem title={element.title.slice(0, 20)} description={element.title.slice(0, 60)} urlToImage= {element.urlToImage} newsUrl= {element.url} />
                    </div>
                })}
                    
                    
                
                </div>
            </div>
            
            </>
        )
    }
}

export default News