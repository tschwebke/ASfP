asfpApp.controller('orderController', ['$scope', '$location', '$rootScope',
function ($scope, $location, $rootScope, $element) {
    $(function ($scope, $element, $rootScope) {
        $('[data-toggle="tooltip"]').tooltip();

        $('#sub1').click(function () {
            $(this).addClass('active');
            $('#sub2').removeClass('active');
            $("#subAnnual").prop("checked", true);
            $("#subAnnual").click();
        });
        $('#sub2').click(function () {
            $(this).addClass('active');
            $('#sub1').removeClass('active');
            $("#subEmerging").prop("checked", true);
            $("#subEmerging").click();
        });
    });
    $rootScope.langID = navigator.language || navigator.userLanguage;
    if ($rootScope.langID.startsWith('ja')) {
        $rootScope.requiredfield = '* は必須項目です';
        $rootScope.pagetitle = 'ASfP 申し込み、Microsoft Advanced Support for Partners';
        $rootScope.pagedescription = 'フォームを入力して、Microsoft Advanced Support for Partners を申し込みます。フォーム送信後、ASfP のお申し込みについて、弊社の担当よりメールにてご連絡差し上げます。';
        $rootScope.title = 'Advanced Support for Partners のお申し込み';
        $rootScope.description = 'Microsoft Advanced Support for Partners を活用して貴社のクラウド ビジネスを拡げていきませんか。お申し込みは本フォームを入力し送信するだけという簡単なものです。その後、マイクロソフト担当者からご連絡差し上げ、お申込内容について確認させていただきます。';
        $rootScope.instructions = 'お申込フォーム';
        $rootScope.fullname = '*お名前';
        $rootScope.softfullname = '';
        $rootScope.workemail = '*メール アドレス';
        $rootScope.businessphonenumber = '*ご連絡先お電話番号';
        $rootScope.idlabel = '*事業所 ID';
        $rootScope.domainname = 'ドメイン名';
        $rootScope.domainexample = '(例: contoso.onmicrosoft.com)';
        $rootScope.selectsubscription = '*Advanced Support for Partners の契約モデルを選択してください。';
        $rootScope.selectsubscription = '*Advanced Support for Partners の契約モデルを選択してください。';
        $rootScope.selectsubscriptionmuted = '';
        $rootScope.annualsubscription1 = 'Advanced Support for Partners ';
        $rootScope.annualsubscription2 = '年間契約';
        $rootScope.annualsubscription3 = '1,600,500 円 (税別)';
        $rootScope.annualsubscriptiontooltip = 'Advanced Support for Partners は、エンド ユーザー様からの信頼獲得のお手伝いや、クラウド ビジネスの成長加速のお手伝いをお求めやすい価格でご提供します。日本はこちらのモデルでのご提供です。';
        $rootScope.emergingmarketsubscription1 = '新興成長市場向け Advanced Support ';
        $rootScope.emergingmarketsubscription2 = 'for Partners 年間契約 ';
        $rootScope.emergingmarketsubscription3 = '$10,000 (税別)';
        $rootScope.emergingmarkettooltip = 'Advanced Support for Partners は、エンド ユーザー様からの信頼獲得のお手伝いや、クラウド ビジネスの成長加速のお手伝いをお求めやすい価格でご提供します。新興成長市場向けのモデルで、日本ではこちらのモデルの利用はできません。';
        $rootScope.emergingmarketrequirements = 'の契約の要件はこちらをご覧ください。';
        $rootScope.clickhere = '* 新興成長市場向け';
        $rootScope.samlocation = '* ご希望のサービス アカウント マネージャの地域:';
        $rootScope.selectregion = '以下のオプションから選択してください。';
        $rootScope.asiapacific = 'アジア太平洋';
        $rootScope.europe = 'ヨーロッパ、中東、アフリカ';
        $rootScope.japan = '日本';
        $rootScope.latinamerica = '南米';
        $rootScope.northamerica = '北米';
        $rootScope.optionalpackagetitle = 'オプションの追加';
        $rootScope.optionalpackagedescription = '貴社のサポート要件を満たすためのオプションとして、3 つの追加パッケージをご用意しています。Advanced Support for Partners のご契約に対して、オプションは追加購入できます。オプション パッケージの購入は前払いとなり、Advanced Support for Partners の契約期間中にご利用いただけます。';
        $rootScope.additionalsam = '追加のサービス管理 ';
        $rootScope.learnmore = '(詳細はこちらをご覧ください。)';
        $rootScope.additionalsamdescription = 'パートナー様の最もクリティカルなケースについてのプロアクティブなガイダンスの提供やサポートの提供だけでなく、クラウド ビジネスやプロジェクトの支援を行ってくれる SAM チームにコンタクトできます。';
        $rootScope.additionalcloudconsult = '追加の Cloud Consult ';
        $rootScope.additionalcloudconsultdescription = 'クラウド サービスの展開や移行、API 開発についてベスト プラクティスや構成のアドバイスを得ることができます。';
        $rootScope.onpremiseselect = 'オンプレミス製品のサポート インシデント';
        $rootScope.onpremiseselectdescription = 'プロフェッショナル サポート インシデントは 1 インシデントずつでも、5 インシデント パックでも購入いただけます。プロフェッショナル サポート インシデントは、マイクロソフト製品の特定の問題、エラー メッセージの解決に使用できます。';
        $rootScope.agreement = '同意内容';
        $rootScope.privacytext = '*最後に 「プライバシー ポリシー」をお読みください。';
        $rootScope.privacyaccept = 'プライバシー ';
        $rootScope.privacystatement = 'ポリシーを確認し、同意しました。';
        $rootScope.successmessage = 'お申し込みフォーム受領後、ASfP のお申し込みについて、弊社の担当よりご連絡差し上げます。[送信] ボタンをクリックして、フォームを送信してください。';
        $rootScope.submit = '送信';
    }
    else {
        $rootScope.requiredfield = '* Indicates a required field';
        $rootScope.pagetitle = 'Purchase ASfP, Microsoft Advanced Support for Partners';
        $rootScope.pagedescription = 'Get Microsoft Advanced Support for Partners by filling out our simple online purchase form. Once you complete the form, one of our service experts will reach out to help you get setup with ASfP.  ';
        $rootScope.title = 'Purchase Advanced Support for Partners  ';
        $rootScope.description = 'Elevate your cloud business with Microsoft’s Advanced Support for Partners. Getting started is easy, just fill out the form below and you will be contacted by a Microsoft representative to review your order request and activate the subscription for your organization.';
        $rootScope.instructions = 'Fill out the form below to get started.';
        $rootScope.fullname = '*Full Name';
        $rootScope.softfullname = '(First name/Last name)';
        $rootScope.workemail = '*Work Email';
        $rootScope.businessphonenumber = '*Business Phone Number';
        $rootScope.idlabel = '*MPN ID';
        $rootScope.domainname = 'Domain Name';
        $rootScope.domainexample = '(e.g. contoso.onmicrosoft.com)';
        $rootScope.selectsubscription = '*Select an Advanced Support for Partners Subscription model ';
        $rootScope.selectsubscriptionmuted = '(Hover over each option to learn more).';
        $rootScope.annualsubscription1 = 'Advanced Support for Partners  ';
        $rootScope.annualsubscription2 = 'Annual Subscription';
        $rootScope.annualsubscription3 = '$15,000 (local taxes apply)';
        $rootScope.annualsubscriptiontooltip = 'Advanced Support for Partners offers cloud support at an accessible price point that helps partners be a great ally to their customers and grow their business faster. This subscription model is for partners outside of the Emerging Markets regions.';
        $rootScope.emergingmarketsubscription1 = 'Advanced Support for Partners Annual  ';
        $rootScope.emergingmarketsubscription2 = 'Subscription in Emerging Markets';
        $rootScope.emergingmarketsubscription3 = '$10,000 (local taxes apply)';
        $rootScope.emergingmarkettooltip = 'Advanced Support for Partners offers cloud support at an accessible price point that helps partners be a great ally to their customers and grow their business faster. This subscription model is for partners within the Emerging Markets regions. Please see the Emerging Market subscription requirements to determine if your organization qualifies. ';
        $rootScope.emergingmarketrequirements = ' for Emerging Market subscription requirements';
        $rootScope.clickhere = '*Click here';
        $rootScope.samlocation = '*Preferred Services Account Manager Location';
        $rootScope.selectregion = 'Select from the following options';
        $rootScope.asiapacific = 'Asia Pacific';
        $rootScope.europe = 'Europe, Middle East, Africa';
        $rootScope.japan = 'Japan';
        $rootScope.latinamerica = 'Latin America';
        $rootScope.northamerica = 'North America';
        $rootScope.optionalpackagetitle = 'Add Optional Packages to your Subscription';
        $rootScope.optionalpackagedescription = 'Choose from our three additional packages that can help you address specialized support scenarios or technologies by checking the box next to your desired package. Packages are paid up-front and require an active Advanced Support for Partners Subscription from your organization.';
        $rootScope.additionalsam = 'Additional Services Management ';
        $rootScope.learnmore = '(Click to learn more)';
        $rootScope.additionalsamdescription = 'Gain direct access to a team of SAMs who provide proactive guidance and support assistance for your most critical cases as well as help identify and execute your top cloud priorities and projects.';
        $rootScope.additionalcloudconsult = 'Additional Cloud Consult Engagements';
        $rootScope.additionalcloudconsultdescription = 'We connect you to a Microsoft technical resource who provides you with best practice and architectural guidance of your deployment, migration, and Cloud API implementations.';
        $rootScope.onpremiseselect = 'On-Premises Support Incidents';
        $rootScope.onpremiseselectdescription = 'Professional Support is available as a single “pay-per-incident” (PPI) or a 5-pack of incidents. Professional Support incidents focus on troubleshooting a specific problem, error message, or functionality that is not working as intended for Microsoft products.';
        $rootScope.agreement = 'Agreement';
        $rootScope.privacytext = '*You’re almost done! Please take a moment to read through and accept our privacy statement.';
        $rootScope.privacyaccept = 'I certify that I have read and accept the ';
        $rootScope.privacystatement = 'privacy statement.';
        $rootScope.successmessage = 'Upon receipt of your order submission, you will be contacted by a Microsoft representative to complete your order and activate Microsoft Advanced Support for Partners. Please click submit to finalize your order.';
        $rootScope.submit = 'Submit';
    }

    $scope.orderSubmission = [
        { name: $scope.name },
        { email: $scope.email },
        { phone: $scope.phone },
        { mpnid: $scope.mpnid },
        { domain: $scope.domain },
        { subscription: $scope.subscription },
        { samlist: $scope.samlist },
        { samhours: $scope.samhours },
        { cloudconsult: $scope.cloudconsult },
        { singlepack: $scope.singlepack },
        { fivepack: $scope.fivepack },
        { privacy: $scope.privacy }
    ];
    //https://docs.microsoft.com/en-us/azure/cosmos-db/table-storage-cloud-service-nodejs
    $scope.order = function () {
        //    var tableUri = 'https://asfpsample.table.core.windows.net/';
        //    var tableService = AzureStorage.createTableServiceWithSas(tableUri, '?sv=2017-07-29&ss=bfqt&srt=sco&sp=rwdlacup&se=2019-04-01T05:15:35Z&st=2018-02-26T22:15:35Z&spr=https&sig=iiXWqq8tvpFt4vI8liZBWR%2B5ElUgOhpMx55Pr7BWk0w%3D');
        //    var partitionKey = "PartitionKey";
        //    var table = "asfpTest";
        //    var rowKey = "RowKey";
        //    var customProperty1 = "Prop1";
        //    var customProperty2 = "Prop2";
        //    var insertEntity = {
        //        PartitionKey: { '_': partitionKey },
        //        RowKey: { '_': rowKey },
        //        CustomProperty1: { '_': customProperty1 },
        //        CustomProperty2: { '_': customProperty2 }
        //    };

        //    tableService.insertOrMergeEntity(table, insertEntity, function (error, result, response) {
        //        if (error) {
        //            alert('Insert table entity error, please open browser console to view detailed error');
        //            console.log(error);
        //        } else {
        //            alert('Insert table entity successfully!');
        //        }
        //    });

        var intlNumber = $('#phone').intlTelInput('getNumber');
        for (var entry in $scope.orderSubmission) {
            (function (entry) {
                $rootScope.phone = $scope.orderSubmission[entry];
            });
        }

        $rootScope.name = $scope.name;
        $rootScope.email = $scope.email;
        $rootScope.phone = $scope.phone;
        $rootScope.mpnid = $scope.mpnid;
        $rootScope.domain = $scope.domain;
        $rootScope.subscription = $scope.subscription;
        $rootScope.samlist = $scope.samlist;
        $rootScope.samhours = $scope.samhours;
        $rootScope.cloudconsult = $scope.cloudconsult;
        $rootScope.singlepack = $scope.singlepack;
        $rootScope.fivepack = $scope.fivepack;
        $rootScope.privacy = $scope.privacy;
        //orderService.set(myName);
        $location.path('/success');
    };
}]);

//order.$inject = ['$scope'];

//function order($scope) {
//    $scope.title = 'order';

//    activate();

//    function activate() {
//    }
//}