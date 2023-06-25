var Mydata = {
    "Title" : {
        "ChineseName" : "謝政剛",
        "EnglishName" : "Cheng Kang"
    },
    "Setps" : [{
        title: '歡迎來到謝政剛的履歷',
        intro: '我這邊將快速為您介紹 👋'
     },
     {
        element: document.querySelector('#DemoStep1'),
        intro: '這是我的名字'
     },
     {
        element: document.querySelector('#DemoStep2'),
        intro: '這是我的技能年資'
     },
     {
        element: document.querySelector('#DemoStep3'),
        intro: '這裡可以直接連絡我'
     }],
     "Introduction" : {
         "zh-tw" : `目前在公司中擔任軟體開發工程師，主要負責處理公司內部應用系統的建置、規劃與維護，並帶著四位團隊成員一起開發與前進。

                    在這職務中，經歷過許多的經驗，例如流程系統效能優化，伺服器穩定度調教與監測以及流程系統更換、Web應用服務建立、Datawarehouse建置、Power BI建置、Git版控導入…等，這些經驗為我提供了深厚的技術背景和實踐經驗。
                    
                    除此之外，我更重視的是一個團隊的合作，因為我相信一個好的團隊可以讓工作更有成就感、更高效率，並提升整體團隊的創造力和創新力。在過去的工作經驗中，我發現一個團隊中的每個成員都有自己獨特的技能和知識，而透過團隊合作，我們可以相互學習和分享，彼此協作，達成更大的目標。
                    
                    例如，在我參與的自動化導入專案中，我需要與其他部門的同事合作，例如採購部門、財務部門、以及其他系統的開發人員，以確保整個專案順利進行並成功上線。這需要我們相互理解、溝通並協調各自的工作，並透過團隊合作，我們不僅成功地節省了公司大量的人力成本，還創造了更高效率、更方便使用的系統，這也是我們團隊所取得的成就。
                    
                    最後，對於程式語言的學習，我一直保持著濃厚的興趣和熱情，持續關注並學習最新的技術和開發趨勢，以便為公司提供更好的解決方案。我相信，對技術的追求和熱情是我能夠在工作中不斷成長和進步的重要因素之一。`,
         "en-us" : ""
     },
     "ExperienceList" : [{
        'Title': '凌巨科技 - 課長 ',
        'Range': '2015 ~ Now',
        'Content': `1. 負責公司內部客製報表系統維護、需求調整、效能調校與系統監控<br>
                    2. 管理排程、API開發等相關程式<br>
                    3. 規劃執行軟體架構及模組之設計，並控管軟體設計進度<br>
                    負責管理人數 : 4`
     }, {
        'Title': '教學助理 宜蘭大學',
        'Range': '2013 ~ 2015',
        'Content': `1. 協助教授進行課堂教學<br>
                    2. 協助撰寫課程教材、設計實驗和程式作業<br>
                    3. 幫助學生理解和說明教授作業<br>
                    4. 協助教授整理文獻與說明`
     }],
     "ProjectList" : 
     [
        {
            "id": "1",
            "title": "管理報表資訊平台",
            "content": `負責收集預估業績資料，並結合Oracle ERP的成本資訊，以計算和生成公司的銷售營業額資料，並將資料用於分析和呈現相關報表。同時，進行預估與實際數據之間的差異分析。這可以減少會計在合併成本時所需的時間。`,
            "technologys": ['C#', 'JavaScript', 'Vue', 'Oracle', 'MSSQL', 'Restful', '.net Core'],
            "tools": ['Vs2019', 'VsCode', 'Git']
        },
        {
            "id": "2",
            "title": "業務支援平台",
            "content": "收集業務客戶資料，分析業績來源，並協助業務上傳預估業績資訊，並以報表方式呈現",
            "technologys": ['C#', 'JavaScript', 'Vue', 'Oracle', 'MSSQL', 'MVC', '.net Core'],
            "tools": ['Vs2019', 'VsCode', 'Git']
        },
        {
            "id": "3",
            "title": "Power BI 報表中心建置",
            "content": "使用PowerBI工具呈現和分析ERP系統中的實際和預估預算資料，並生成相應的報表。同時，進行預估與實際資料的比較分析，特別關注預估良率和利差，並檢查是否在正常範圍內。",
            "technologys": ['Data analyze'],
            "tools": ['PowerBI']
        },
        {
            "id": "4",
            "title": "Data Warehouse建置",
            "content": "將各系統平台資料進行彙整整理，利用資料庫正規化方式將資料進行正規化、過濾、篩選，使資料可以利用在分析中。",
            "technologys": [],
            "tools": ['SSIS','ETL']
        },
        {
            "id": "5",
            "title": "產能規劃平台",
            "content": "利用生產企劃所排定的排產資料，進行加工，找出預估排程後的成本、當量…相關議題",
            "technologys": ['C#', 'JavaScript','Html', 'jQuery', 'Oracle'],
            "tools": ['Vs2012','Svn']
        },
        {
            "id": "6",
            "title": "工單損益平台",
            "content": "利用工廠提供的預估良率資結合ERP成本資訊，計算工單利差分析與報表呈現。",
            "technologys": ['C#', 'JavaScript','Html', 'jQuery', 'Oracle'],
            "tools": ['Vs2012','Svn']
        },
        {
            "id": "7",
            "title": "預算損益管控平台",
            "content": "利用各部門預估預算資料進行分析，算出公司內部研發費用、管理費用、製造費用與研發費用，最後結合相關資料，提供公司內部損益報表。",
            "technologys": ['C#', 'JavaScript','Html', 'jQuery', 'Oracle'],
            "tools": ['Vs2012','Svn']
        },
        {
            "id": "8",
            "title": "PM報價平台",
            "content": "根據PM維護相關材料資訊及成本，快速協助PM進行產品料成本估算，並結合ERP BOM資訊，估算產品工費。",
            "technologys": ['C#', 'JavaScript','Html', 'jQuery', 'Oracle'],
            "tools": ['Vs2012','Svn']
        },
        {
            "id": "9",
            "title": "新人類流程平台系統導入",
            "content": "導入新人類平台，並利規劃新平台整體設計模式，使開發人開撰寫風格更一致。",
            "technologys": ['C#', 'JavaScript','Html', 'jQuery', 'Oracle'],
            "tools": ['NewTypeTool']
        },
        {
            "id": "10",
            "title": "網頁平台流程串接",
            "content": "利用Java Webservice與Agentflow進行流程串接，可根據Web頁面提供的相關資訊直接進行單據開立與簽核，並在Web上顯示流程狀態。",
            "technologys": ['Java','Webservice'],
            "tools": ['AgentflowTool','Eclipse']
        },
        {
            "id": "11",
            "title": "集團流程優化",
            "content": "與ERP串接請購流程自動化(原人工作業動作改為自動化流程，減少人工負擔)、物料引進流程優化(由平均簽和天數為半年，優化至三個月結束)、文件管制流程合併(減少流程複雜度)",
            "technologys": ['Java','Webservice'],
            "tools": ['AgentflowTool','Eclipse']
        },
        {
            "id": "12",
            "title": "集團流程戰情室",
            "content": "根據Agentflow流程資料庫，提取並分析開單量最大單據、簽核流程最久單據、最多未結案單據…等議題，供後續流程優化使用。",
            "technologys": ['C#', 'JavaScript','Html', 'jQuery', 'Oracle'],
            "tools": ['Vs2012', 'Svn']
        },
        {
            "id": "13",
            "title": "集團教育訓練流程建置",
            "content": "根據公司內部訓練單位以及外部TTQS稽核單位，建置整體訓練流程表單，減少人工紀錄及完整人員訓練歷程，與提供人事單位盤點之相關功能。",
            "technologys": ['Java','Webservice'],
            "tools": ['AgentflowTool','Eclipse']
        },
        {
            "id": "14",
            "title": "流程伺服器優化案",
            "content": "根據伺服器提供的log紀錄與程式(Ex. SQL執行時間長短)改寫，進一步改善系統效能，並利用Tomcat負載平衡來減輕伺服器負擔。額外利用自動程式進行log搬移、應用程式異常偵測、同時在線人數偵測進行調適。",
            "technologys": ['Java','JavaScript','Tomcat'],
            "tools": ['AgentflowTool','AutoIT']
        },
        {
            "id": "15",
            "title": "內部EIP系統網頁",
            "content": "此為公司內部入口網站，提供公司內部大大小小服務系統入口整合，包括ERP、PLM、信箱、BPM…系統整合，提供員工更迅速及直覺得使用相關系統，且只需經過一次驗證(SSO)。",
            "technologys": ['C#', 'Webform','Html', 'jQuery', 'Oracle'],
            "tools": ['Vs2012']
        },
        {
            "id": "16",
            "title": "關東鑫林流程外包案",
            "content": "根據外部公司所提之需求，協助完成流程建置，包刮人事考勤流程、SPA ERP流程建置…等",
            "technologys": ['Java','Webservice'],
            "tools": ['AgentflowTool']
        }
    ],
    "SidePorjectList" : [
        {
            "id": "1",
            "title": "你比我猜",
            "content": "此遊戲是一個比手畫腳的互動式遊戲，主要有兩個玩家，一個玩家拿著手機當作猜答案的一方，而另外一位玩家則是需要用手比劃的方式，來讓猜測的玩家猜到其題目，首先可以自訂其整體遊戲時間，輸入完畢後就可以開始遊戲，如答對就可以把手機往上翻，以利計算分數，而如果真的猜不出來則把手機面向下。",
            "technologys": ['Android','Java'],
            "tools": ['Eclipse','Android Studio']
        },
        {
            "id": "2",
            "title": "103資訊月-教育部互動闖關遊戲",
            "content": "說明 : 此闖關活動是為了宣導期永續校園的概念，並利用拉霸的方式來與使用者作互動，其中是利用Kinect來抓取其人體骨架，再判斷手勢與移動，來拉取霸條。",
            "technologys": ['Delphi','OpenCV','Kinect'],
            "tools": ['Delphi XE5']
        },
        {
            "id": "3",
            "title": "102資訊月-教育部互動闖關遊戲",
            "content": "此闖關遊戲是藉由已Kinect來偵測手部，並依照螢幕所顯示之題目進行舉手答題的動作，利用人機互動的方式來達到資訊安全、強震防災等教育部各項服務的宣傳效果，進而讓參訪者新的互動與體驗。此互動遊戲利用到Kinect的骨架追蹤系統，該系統可以確實抓取在範圍內的人體骨架，本計畫就利用此方式來偵測人體手部的手勢動作，而抓取手部動作並辨認參訪者的肢體動作所代表的涵義，達到寓教於樂的新應用。",
            "technologys": ['Delphi','OpenCV','Kinect'],
            "tools": ['Delphi XE5']
        }
    ]
};