<?php

namespace App\Actions;

use GuzzleHttp\Client;

class NotifyOnSlack {
    public function __construct(){
        // Placeholder in case action composition is required
    }

    /**
     *
     * @param array $data
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function execute(array $data){
        $client = new Client([
            'base_uri' => 'https://slack.com/api/',
        ]);

        $payload = json_encode([
            "channel" => env("SLACK_CHANNEL_ID"),
            "user" => $data['user_id'],
            "text" => ":coffee: {$data['text']}",
        ]);

        $response = $client->post('chat.postEphemeral', [
            'debug' => true,
            'headers' => [
                'Content-Type' => 'application/json',
                'Authorization' => "Bearer ".env("SLACK_BOT_USER_OAUTH_TOKEN"),
            ],
            'body' => $payload,
        ]);

        return $response;
    }
}