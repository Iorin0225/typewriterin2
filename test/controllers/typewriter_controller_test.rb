require "test_helper"

class TypewriterControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get typewriter_index_url
    assert_response :success
  end
end
