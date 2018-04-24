﻿var asfpApp = angular.module('asfpApp',
    ['ngRoute', 'gettext']);

asfpApp.run(function (gettextCatalog) {
    if (!String.prototype.startsWith) {
        String.prototype.startsWith = function (searchString, position) {
            position = position || 0;
            return this.indexOf(searchString, position) === position;
        };
    };

    var langID = navigator.language || navigator.userLanguage;
    if (langID.startsWith('ja')) { langID = 'ja'; }
    else { langID = 'en' };
    gettextCatalog.setCurrentLanguage(langID);
    /* jshint -W100 */
    gettextCatalog.setStrings('en', { "(Click to learn more)": "(Click to learn more)", "(First name/Last name)": "(First name/Last name)", "(Hover over each option to learn more)": "(Hover over each option to learn more)", "* Billing will be in your local currency, with currency conversion rates updated quarterly.": "* Billing will be in your local currency, with currency conversion rates updated quarterly.", "* Indicates a required field": "* Indicates a required field", "*Business Phone Number": "*Business Phone Number", "*Full Name": "*Full Name", "*MPN ID": "*MPN ID", "*Preferred Services Account Manager Location": "*Preferred Services Account Manager Location", "*Select an Advanced Support for Partners Plan": "*Select an Advanced Support for Partners Plan", "*Work Email": "*Work Email", "*You’re almost done! Please take a moment to read through and accept our privacy statement.": "*You’re almost done! Please take a moment to read through and accept our privacy statement.", "20 Hours of Services Account Management – USD 4,000 (local taxes apply)": "20 Hours of Services Account Management – USD 4,000 (local taxes apply)", "5-Pack On Premises Support Incidents – USD 1,999 (local taxes apply)": "5-Pack On Premises Support Incidents – USD 1,999 (local taxes apply)", "A support offerings specialist will be in touch with you shortly.": "A support offerings specialist will be in touch with you shortly.", "Add Optional Packages to your Contract": "Add Optional Packages to your Contract", "Additional Cloud Consult Engagements": "Additional Cloud Consult Engagements", "Additional Services Management": "Additional Services Management", "Advanced Support for Partners": "Advanced Support for Partners", "Advanced Support for Partners Annual": "Advanced Support for Partners Annual", "Advanced Support for Partners offers cloud support at an accessible price point that helps partners be a great ally to their customers and grow their business faster. This 1-year contract is for partners outside of the Emerging Markets regions.": "Advanced Support for Partners offers cloud support at an accessible price point that helps partners be a great ally to their customers and grow their business faster. This 1-year contract is for partners outside of the Emerging Markets regions.", "Advanced Support for Partners offers cloud support at an accessible price point that helps partners be a great ally to their customers and grow their business faster. This 1-year contract is for partners within the Emerging Markets regions. Please see the Emerging Market contract requirements to determine if your organization qualifies.": "Advanced Support for Partners offers cloud support at an accessible price point that helps partners be a great ally to their customers and grow their business faster. This 1-year contract is for partners within the Emerging Markets regions. Please see the Emerging Market contract requirements to determine if your organization qualifies.", "Annual Contract": "Annual Contract", "Asia Pacific": "Asia Pacific", "Choose from our three additional packages that can help you address specialized support scenarios or technologies by checking the box next to your desired package. Packages are paid up-front and require an active Advanced Support for Partners contract from your organization.": "Choose from our three additional packages that can help you address specialized support scenarios or technologies by checking the box next to your desired package. Packages are paid up-front and require an active Advanced Support for Partners contract from your organization.", "Click here": "Click here", "Cloud Consult Engagement – USD 2,000 (local taxes apply)": "Cloud Consult Engagement – USD 2,000 (local taxes apply)", "Cloud Consults offer a remote one-to-one, in-depth technical consultation with a Microsoft Cloud Expert to provide guidance on various stages of your cloud projects.": "Cloud Consults offer a remote one-to-one, in-depth technical consultation with a Microsoft Cloud Expert to provide guidance on various stages of your cloud projects.", "Contract in Emerging Markets": "Contract in Emerging Markets", "Domain Name": "Domain Name", "Elevate your cloud business with Microsoft’s Advanced Support for Partners. Getting started is easy, just fill out the form below and you will be contacted by a Microsoft representative to review your order request and activate a contract for your organization.": "Elevate your cloud business with Microsoft’s Advanced Support for Partners. Getting started is easy, just fill out the form below and you will be contacted by a Microsoft representative to review your order request and activate a contract for your organization.", "Europe, Middle East, Africa": "Europe, Middle East, Africa", "Fill out the form below to get started.": "Fill out the form below to get started.", "Gain direct access to a team of SAMs who provide proactive guidance and support assistance for your most critical cases as well as help identify and execute your top cloud priorities and projects.": "Gain direct access to a team of SAMs who provide proactive guidance and support assistance for your most critical cases as well as help identify and execute your top cloud priorities and projects.", "I certify that I have read and accept the": "I certify that I have read and accept the", "Invalid MPN ID": "Invalid MPN ID", "Invalid email address": "Invalid email address", "Invalid input": "Invalid input", "Invalid phone number!": "Invalid phone number!", "Japan": "Japan", "Latin America": "Latin America", "North America": "North America", "On-Premises Support Incidents": "On-Premises Support Incidents", "Professional Support is available as a 5-pack of incidents. Professional Support incidents focus on troubleshooting a specific problem, error message, or functionality that is not working as intended for Microsoft products.": "Professional Support is available as a 5-pack of incidents. Professional Support incidents focus on troubleshooting a specific problem, error message, or functionality that is not working as intended for Microsoft products.", "Purchase ASfP, Microsoft Advanced Support for Partners": "Purchase ASfP, Microsoft Advanced Support for Partners", "Purchase Advanced Support for Partners": "Purchase Advanced Support for Partners", "Return to page": "Return to page", "SAM location not selected": "SAM location not selected", "Select from the following options": "Select location", "Submit": "Submit", "Subscription not selected": "Subscription not selected", "Thank you!": "Thank you!", "USD 10,000* (local taxes apply)": "USD 10,000* (local taxes apply)", "USD 15,000* (local taxes apply)": "USD 15,000* (local taxes apply)", "Upon receipt of your order submission, you will be contacted by a Microsoft representative to complete your order. Please click submit to proceed.": "Upon receipt of your order submission, you will be contacted by a Microsoft representative to complete your order. Please click submit to proceed.", "e.g. contoso.onmicrosoft.com": "e.g. contoso.onmicrosoft.com", "e.g. name@example.com": "e.g. name@example.com", "for Emerging Market subscription requirements": "for Emerging Market subscription requirements", "https://privacy.microsoft.com/en-us/privacystatement": "https://privacy.microsoft.com/en-us/privacystatement", "preEmerging": " ", "privacy statement.": "privacy statement.", "privay": " " });
    gettextCatalog.setStrings('ja', { "(Click to learn more)": "(詳細はこちらをご覧ください。)", "(First name/Last name)": "(姓と名の間に半角スペースを入れてください。)", "(Hover over each option to learn more)": "(各契約モデルの概要を確認するためには、マウスを合わせてください。)", "* Billing will be in your local currency, with currency conversion rates updated quarterly.": "* お支払いは現地の通貨になりますが、四半期ごとに通貨換算のレートは更新されます。", "* Indicates a required field": "* は必須項目です", "*Business Phone Number": "*ご連絡先お電話番号", "*Full Name": "*お名前", "*MPN ID": "*事業所 ID", "*Preferred Services Account Manager Location": "* ご希望のサービス アカウント マネージャの地域:", "*Select an Advanced Support for Partners Plan": "*Advanced Support for Partners の契約モデル を選択してください。", "*Work Email": "*メール アドレス", "*You’re almost done! Please take a moment to read through and accept our privacy statement.": "*最後に 「プライバシー ポリシー」をお読みください。", "20 Hours of Services Account Management – USD 4,000 (local taxes apply)": "サービス アカウント マネジメント 20 時間 – 440,000 円 (税別)", "5-Pack On Premises Support Incidents – USD 1,999 (local taxes apply)": "5 インシデント パック 199,900 円 (税別)", "A support offerings specialist will be in touch with you shortly.": "担当者よりご連絡いたしますので、お待ちください。", "Add Optional Packages to your Contract": "オプションの追加", "Additional Cloud Consult Engagements": "追加の Cloud Consult", "Additional Services Management": "追加のサービス管理", "Advanced Support for Partners": "Advanced Support for Partners", "Advanced Support for Partners Annual": "新興成長市場向け ", "Advanced Support for Partners offers cloud support at an accessible price point that helps partners be a great ally to their customers and grow their business faster. This 1-year contract is for partners outside of the Emerging Markets regions.": "Advanced Support for Partners は、エンド ユーザー様からの信頼獲得のお手伝いや、クラウド ビジネスの成長加速のお手伝いをお求めやすい価格でご提供します。日本はこちらのモデルでのご提供です。", "Advanced Support for Partners offers cloud support at an accessible price point that helps partners be a great ally to their customers and grow their business faster. This 1-year contract is for partners within the Emerging Markets regions. Please see the Emerging Market contract requirements to determine if your organization qualifies.": "Advanced Support for Partners は、エンド ユーザー様からの信頼獲得のお手伝いや、クラウド ビジネスの成長加速のお手伝いをお求めやすい価格でご提供します。新興成長市場向けのモデルで、日本ではこちらのモデルの利用はできません。", "Annual Contract": "年間契約", "Asia Pacific": "アジア太平洋", "Choose from our three additional packages that can help you address specialized support scenarios or technologies by checking the box next to your desired package. Packages are paid up-front and require an active Advanced Support for Partners contract from your organization.": "貴社のサポート要件を満たすためのオプションとして、3 つの追加パッケージをご用意しています。Advanced Support for Partners のご契約に対して、オプションは追加購入できます。オプション パッケージの購入は前払いとなり、Advanced Support for Partners の契約期間中にご利用いただけます。", "Click here": "こちら", "Cloud Consult Engagement – USD 2,000 (local taxes apply)": "Cloud Consults 1 回 220,000 円 (税別)", "Cloud Consults offer a remote one-to-one, in-depth technical consultation with a Microsoft Cloud Expert to provide guidance on various stages of your cloud projects.": "Cloud Consult では、クラウド プロジェクトに関して、アドバイスを得ることができます。", "Contract in Emerging Markets": "Advanced Support  for Partners 年間契約 ", "Domain Name": "ドメイン名", "Elevate your cloud business with Microsoft’s Advanced Support for Partners. Getting started is easy, just fill out the form below and you will be contacted by a Microsoft representative to review your order request and activate a contract for your organization.": "Microsoft Advanced Support for Partners を活用して貴社のクラウド ビジネスを拡げていきませんか。お申し込みは本フォームを入力し送信するだけという簡単なものです。その後、マイクロソフト担当者からご連絡差し上げ、お申込内容について確認させていただきます。", "Europe, Middle East, Africa": "ヨーロッパ、中東、アフリカ", "Fill out the form below to get started.": "お申込フォーム。", "Gain direct access to a team of SAMs who provide proactive guidance and support assistance for your most critical cases as well as help identify and execute your top cloud priorities and projects.": "パートナー様の最もクリティカルなケースについてのプロアクティブなガイダンスの提供やサポートの提供だけでなく、クラウド ビジネスやプロジェクトの支援を行ってくれる SAM チームにコンタクトできます。", "I certify that I have read and accept the": " ", "Invalid MPN ID": "入力項目に不備があります。", "Invalid email address": "入力項目に不備があります", "Invalid input": "入力項目に不備があります", "Invalid phone number!": "入力項目に不備があります。", "Japan": "日本", "Latin America": "南米", "North America": "北米", "On-Premises Support Incidents": "オンプレミス製品のサポート インシデント", "Professional Support is available as a 5-pack of incidents. Professional Support incidents focus on troubleshooting a specific problem, error message, or functionality that is not working as intended for Microsoft products.": "プロフェッショナル サポート インシデントは、5 インシデント パックとしてご購入いただけます。プロフェッショナル サポート インシデントは、マイクロソフト製品の特定の問題、エラーメッセージなどの問題解決に使用できます。", "Purchase ASfP, Microsoft Advanced Support for Partners": "ASfP 申し込み、Microsoft Advanced Support for Partners", "Purchase Advanced Support for Partners": "Advanced Support for Partners のお申し込み", "Return to page": "前のページに戻る", "SAM location not selected": "* ご希望のサービス アカウント マネージャの地域:", "Select from the following options": "地域を選択してください。", "Submit": "送信", "Subscription not selected": "をご覧ください。", "Thank you!": "お申し込みありがとうございます。", "USD 10,000* (local taxes apply)": "USD 10,000* (現地の税が適用されます)", "USD 15,000* (local taxes apply)": "1,600,500 円* (税別)", "Upon receipt of your order submission, you will be contacted by a Microsoft representative to complete your order. Please click submit to proceed.": "お申し込みフォーム受領後、ASfP のお申し込みについて、弊社の担当よりご連絡差し上げます。[送信] ボタンをクリックして、フォームを送信してください。", "e.g. contoso.onmicrosoft.com": "例: contoso.onmicrosoft.com", "e.g. name@example.com": "例: name@example.com", "for Emerging Market subscription requirements": "をご覧ください。", "https://privacy.microsoft.com/en-us/privacystatement": "https://privacy.microsoft.com/ja-jp/privacystatement", "preEmerging": "新興成長市場向け契約の要件は", "privacy statement.": "プライバシー ポリシー", "privay": "を確認し、同意しました。" });
    /* jshint +W100 */
}, ['$rootScope', '$location', '$locale',
        function ($rootScope, $location) {
            $rootScope.$on('$routeChangeError', function (event, next, previous, error) {
                $location.path('/purchaseasfp');
            });
        }]);

asfpApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.caseInsensitiveMatch = true;
    $routeProvider.
        when('/purchaseasfp', {
            templateUrl: 'views/purchaseasfp.html',
            controller: 'orderController'
        }).
        when('/success', {
            templateUrl: 'views/success.html',
            controller: 'successController'
        }).
        otherwise({
            redirectTo: '/purchaseasfp'
        })
    $locationProvider.html5Mode(true);
}]);