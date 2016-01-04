defmodule CampaignArticles.PageController do
  use CampaignArticles.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
