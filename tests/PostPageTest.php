<?php

class PostPageTest extends TestCase {

	/**
	 * A basic functional test example.
	 *
	 * @return void
	 */
	public function testPostIndexPageExample()
	{
		$response = $this->call('GET', '/posts');

		$this->assertEquals(200, $response->getStatusCode());
	}

}
