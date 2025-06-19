<?php
// 受信データ
$name = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8');

// メール送信先
$to = "aba03145963@icloud.com";
$subject = "【お問い合わせ】" . $name . " 様より";
$body = <<<EOM
お名前: $name
メールアドレス: $email

--- お問い合わせ内容 ---
$message
EOM;

$headers = "From: $email";

// メール送信処理
if (mb_send_mail($to, $subject, $body, $headers)) {
  echo "お問い合わせありがとうございました。送信に成功しました。";
} else {
  echo "申し訳ありません、送信に失敗しました。";
}
?>
