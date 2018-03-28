asfpApp.controller('orderController', ['$scope', '$location', '$rootScope',
    function ($scope, $location, $rootScope, $element) {
        $(function ($scope, $element) {
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
            $rootScope.emergingmarketrequirements = 'をご覧ください。';
            $rootScope.clickhere = 'こちら';
            $rootScope.leadclickhere = '* 新興成長市場向けの契約の要件は';
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
            $rootScope.thankyou = 'お申し込みありがとうございます。';
            $rootScope.offeringspecialist = '担当者よりご連絡いたしますので、お待ちください。';
            $rootScope.returntopage = '前のページに戻る';
            $rootScope.samhourstxt = 'サービス アカウント マネジメント 20 時間 – 440,000 円 (税別)';
            $rootScope.cloudconsulttxt = '1 回あたり 220,000 円 (税別)';
            $rootScope.onepacktxt = '1 インシデント 49,900 円 (税別)';
            $rootScope.fivepacktxt = '5 インシデント パック 199,900 円 (税別)';
            $scope.formLCID = '1041';
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
            $rootScope.leadclickhere = '';
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
            $rootScope.thankyou = 'Thank you!';
            $rootScope.offeringspecialist = 'A support offerings specialist will be in touch with you shortly.';
            $rootScope.returntopage = 'Return to page';
            $rootScope.samhourstxt = '20 Hours of Services Account Management – USD $4,000 (local taxes apply)';
            $rootScope.cloudconsulttxt = 'Cloud Consult Engagement – USD $2,000 (local taxes apply)';
            $rootScope.onepacktxt = '1-Pack On Premises Support Incident – USD $499 (local taxes apply)';
            $rootScope.fivepacktxt = '5-Pack On Premises Support Incidents – USD $1,999 (local taxes apply)';
            $scope.formLCID = '9';
        }

        $scope.order = function () {
            var date = new Date();
            $scope.createdtime = date.toLocaleString('en-US', { timeZone: 'UTC' });
            var newdate = date.valueOf();
            newdate = newdate.toString();
            var initials = $scope.name;
            initials = initials.substring(0, 2);
            newdate = newdate + initials;
            if ($scope.formLCID == '1041') {
                var sub1 = 'W6N - 00001 Advanced Support for Partners 年間契約 – 1, 600, 500 円(税別)'
                var sub2 = 'W6M - 00001 新興成長市場向け Advanced Support for Partners 年間契約 – 137, 500 円(税別)'
                var ced = 'W74 - 00001 1 回あたり – 220, 000 円(税別)'
                var samh = 'W67 - 00001 1 インシデント – 49, 900 円(税別)'
                var inc1 = 'W69 - 00001 5 インシデント パック – 199, 900 円(税別)'
                var inc5 = 'W73 - 00001 サービス アカウント マネジメント 20 時間 – 440, 000 円(税別)'
                var incidents;
                if ($scope.singlepack && $scope.fivepack) {
                    incidents = inc1 + '\n' + inc5;
                }
                else if ($scope.singlepack && !$scope.fivepack) {
                    incidents = inc1;
                }
                else if (!$scope.singlepack && $scope.fivepack) {
                    incidents = inc5;
                }
                else { incidents = ''; }
                if ($scope.samhours) { $scope.samhours = samh; }
                if ($scope.cloudconsult) { $scope.cloudconsult = ced; }
                if ($scope.subscription == 'W6N-00001 Advanced Support for Partners Annual Subscription') {
                    $scope.subscription = sub1;
                }
                else {
                    $scope.subscription = sub5;
                }
            }
            else {
                var sub1 = 'W6N - 00001 Advanced Support for Partners Annual Subscription – USD $15, 000(local taxes apply)'
                var sub2 = 'W6N - 00002 Advanced Support for Partners Annual Subscription in Emerging Markets – USD $10, 000(local taxes apply)'
                var ced = 'W74 - 00001 1 Cloud Consult Engagement – USD 2, 000(local taxes apply)'
                var samh = 'W67 - 00001 1 - Pack On Premises Support Incident – USD 499(local taxes apply)'
                var inc1 = 'W69 - 00001 5 - Pack On Premises Support Incidents – USD 1, 999(local taxes apply)'
                var inc5 = 'W73 - 00001 20 Hours of Services Account Management – USD $4, 000(local taxes apply)'
                var incidents;
                if ($scope.singlepack && $scope.fivepack) {
                    incidents = inc1 + '\n' + inc5;
                }
                else if ($scope.singlepack && !$scope.fivepack) {
                    incidents = inc1;
                }
                else if (!$scope.singlepack && $scope.fivepack) {
                    incidents = inc5;
                }
                else { incidents = ''; }
                if ($scope.samhours) { $scope.samhours = samh; }
                if ($scope.cloudconsult) { $scope.cloudconsult = ced; }
                if ($scope.subscription == 'W6N-00001 Advanced Support for Partners Annual Subscription') {
                    $scope.subscription = sub1;
                }
                else {
                    $scope.subscription = sub5;
                }
            }

            //https://docs.microsoft.com/en-us/azure/cosmos-db/table-storage-cloud-service-nodejs
            $scope.orderSubmission
            var entity = {
                PartitionKey: $scope.samlist,
                RowKey: newdate, // valueOf() created date + first 2 characters of name
                CreatedDateTime: $scope.createdtime, //created date
                IPAdress: '127.1.1.1', //Not used
                IsAuthenticated: 'No', //Not used
                IsEmailVerified: 'NA', //Not used
                WizardID: '8d076345-5e8c-4e3f-9d7a-1fc3c9be69fd', //Not used
                Lcid: $scope.formLCID, //Form LCID
                QIDb6bef45f8bb74610a054e56923f0654b: '', //not sure but its an empty field
                QID123ab46f5e564a659705617853dc3436: $scope.name, //name
                QIDa20cad709cdf49f692f7227c117d59e2: $scope.email, //email
                QIDe05f0c99ad6b4ad1ab027f199f09ce06: '', //was billing contact name
                QID90a12ec1b9f94cb6886fd54c42eb7adc: '', //was billing contact email
                QID2b75a947864e41f3970f078dd099974a: '', //was promo code
                QIDea3cdc0d3de94fe39c638fe226fc8583: '', //was other email
                phone: $scope.phone, //phone, not in TFS yet
                QID529fc10c5afe45e2ae815efcc029877d: $scope.mpnid, //mpnid
                QID5f48d693c4d34c149aa0398c477c6e13: $scope.domain, //domain - not required
                QID698043afcfc848d99adf30019088d7bc: $scope.subscription, //subscription
                QIDcc9d6f8bf1e647dfbce07b88daafa817: $scope.samlist, //samlocation
                QIDc7aa2740c3cf45db98deef24bb3f8838: $scope.samhours, //sku for sam hours - not required
                QIDb6bef45f8bb74610a054e56923f0654b: $scope.cloudconsult, //sku for cloudconsult - not required
                QIDca96efe55b8c4b27bee10d50846e1efa: $scope.singlepack + '\n' + $scope.fivepack, //sku for 1 and 5 pack TODO:Handle empty strings
                QID88a590c2da254c39847af73da3be7b94: 'Privacy Policy Agreement Completed' //privay agreement
            };

            var tableUri = 'https://asfpsample.table.core.windows.net/';
            var tableService = AzureStorage.createTableService('asfptbl', 'h4bDfcQ/NJAH2CiyN2ruqBBfbQgb2/1LHVsT8rpDJ0v2ybDEiWLw/wWNxyKkZUVRc6S5Z/VJGObDV5hQLOnOsA==');
            var table = "asfpTable";
            $scope.orderSubmission = JSON.stringify(entity);

            tableService.insertOrMergeEntity(table, entity, function (error, result, response) {  //TODO: Add error handling
                if (error) {
                    console.log('Insert table entity error, please open browser console to view detailed error');
                    console.log(error);
                } else {
                    console.log('Insert table entity successfully!');
                }
            });

            var intlNumber = $('#phone').intlTelInput('getNumber');
            for (var entry in $scope.orderSubmission) {
                (function (entry) {
                    $rootScope.phone = $scope.orderSubmission[entry];
                });
            }

            $rootScope.json = entity;
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