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
         "zh-tw" : "目前在公司內部擔任MIS軟體開發工程師，有許多的開發及整合企業流程的經驗，在此職務時不斷優化改善系統穩定度及操作，以及各項報表開發經驗，網頁開發經驗，各系統間串接經驗頗豐。 在職期間利用下班空餘時間使用 Udemy 線上課程『Python / 機器學習 / 』進修相關領域，期望自己不單單只是一般的網頁設計師，在 UI/UX 方面也可以更加精進。 在職期間參與請採購系統自動化導入，擔任系統間的開發人員與溝通的橋樑，為公司節省大量人力成本，如將此經驗應用於軟體開發中的自動化測試系統中，想必可以節省大量的測試時間與人力成本，增加系統軟體的良率。",
         "en-us" : ""
     },
     "ExperienceList" : [{
        'Title': '凌巨科技 - 課長 ',
        'Range': '2015 ~ Now',
        'Content': `1. 負責公司內部客製報表系統維護、需求調整、效能調校與系統監控<br>
                    2. 管理排程、API開發等相關程式<br>
                    3. 規劃執行軟體架構及模組之設計，並控管軟體設計進度<br>
                    負責管理人數 : 2`
     }, {
        'Title': '教學助理 宜蘭大學',
        'Range': '2013 ~ 2015',
        'Content': '使用Agentflow進行流程開發與協助公司各單位優化表單流程，使用Asp .NET 進行全端程式開發，並使用WCF與其他異質系統串接，使用Oracle DB進行EDI'
     }],
     "ProjectList" : 
     [
        {
            "id": "1",
            "title": "管理報表資訊平台",
            "content": "收集預估業績資料結合Oracle ERP 成本資訊，計算與產生公司銷售營業額資料，並加以分析、呈現。將ERP實際銷售報表整合實績成本，分析預估與實際中差異，減少會計在合併成本時間。",
            "technologys": ['C#', 'JavaScript', 'Vue', 'Oracle', 'MSSQL', 'Restful', '.net Core'],
            "tools": ['Vs2019', 'VsCode', 'Git']
        },
        {
            "id": "2",
            "title": "業務支援平台",
            "content": "收集業務客戶資料，分析業績來源",
            "technologys": ['C#', 'JavaScript', 'Vue', 'Oracle', 'MSSQL', 'MVC', '.net Core'],
            "tools": ['Vs2019', 'VsCode', 'Git']
        },
        {
            "id": "3",
            "title": "Power BI 報表中心建置",
            "content": "將ERP實際/預估預算資料，由PowerBI進行呈現與分析並產生報表，追蹤主要預算使用部份，以及預估與實際資料進行比較分析。將預估良率與利差進行分組分析，查看各機種的利差是否在正常值，如過大的問題是如何。",
            "technologys": [],
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