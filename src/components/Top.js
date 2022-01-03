import React, { Component } from "react";




class Top extends Component {

	render() {
		return (
			<div>
				<nav className="navbar is-white topNav">
					<div className="container">
						<div className="navbar-brand">

							<div className="navbar-burger burger" data-target="topNav">
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>
						<div id="topNav" className="navbar-menu">
							<div className="navbar-start">
								<a className="navbar-item" href="/">Home</a>
								<a className="navbar-item" href="actors">Actors</a>
								<a className="navbar-item" href="movies">Movies</a>
								<a className="navbar-item" href="tvshows">TV Shows</a>

							</div>
							<div className="navbar-end">
								<div className="navbar-item">
									<div className="field is-grouped">
										<p className="control">
											<a className="button is-small">
												<span className="icon">
													<i className="fa fa-user-plus"></i>
												</span>
												<span>
													Register
												</span>
											</a>
										</p>
										<p className="control">
											<a className="button is-small is-info is-outlined">
												<span className="icon">
													<i className="fa fa-user"></i>
												</span>
												<span>Login</span>
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</nav>
				<nav className="navbar is-white">
					<div className="container">
						<div className="navbar-menu">
							<div className="navbar-start">
							</div>
							<div className="navbar-end">
								<div className="navbar-item">
									<input className="input" type="search" placeholder="Search forum..." />
								</div>
							</div>
						</div>
					</div>
				</nav>
				<section className="container">
					<div className="columns">
						<div className="column is-3">
							<a className="button is-primary is-block is-alt is-large" href="#">New Post</a>
							<aside className="menu">
								<p className="menu-label">
									Tags
								</p>
								<ul className="menu-list">
									<li><span className="tag is-primary is-medium ">News</span></li>
									<li><span className="tag is-link is-medium ">Films</span></li>
									<li><span className="tag is-light is-danger is-medium ">Tv Shows</span></li>
									<li><span className="tag is-dark is-medium ">Actors</span></li>
									<li><span className="tag is-success is-medium ">Directors</span></li>
									<li><span className="tag is-warning is-medium ">Song</span></li>
								</ul>
							</aside>
						</div>
						<div className="column is-9">
							<div className="box content">
								<article className="post">
									<h4>"Atlanta" heads to Europe"</h4>
									<div className="media">
										<div className="media-left">
											<p className="image is-32x32">
												<img src="http://bulma.io/images/placeholders/128x128.png" />
											</p>
										</div>
										<div className="media-content">
											<div className="content">
												<p>
													<a href="#">@jillyfromphilly</a> replied 34 minutes ago &nbsp;
													<span className="tag">Question</span>
												</p>
											</div>
										</div>
										<div className="media-right">
											<span className="has-text-grey-light"><i className="fa fa-comments"></i> 1</span>
										</div>
									</div>
								</article>
								<article className="post">
									<h4>Gal Godot in 'Death on the Nile</h4>
									<div className="media">
										<div className="media-left">
											<p className="image is-32x32">
												<img src="http://bulma.io/images/placeholders/128x128.png" />
											</p>
										</div>
										<div className="media-content">
											<div className="content">
												<p>
													<a href="#">@desus</a> replied 40 minutes ago &nbsp;
													<span className="tag">Question</span>
												</p>
											</div>
										</div>
										<div className="media-right">
											<span className="has-text-grey-light"><i className="fa fa-comments"></i> 0</span>
										</div>
									</div>
								</article>
								<article className="post">
									<h4>Star Siblings: Famous Brothers and Sisters</h4>
									<div className="media">
										<div className="media-left">
											<p className="image is-32x32">
												<img src="http://bulma.io/images/placeholders/128x128.png" />
											</p>
										</div>
										<div className="media-content">
											<div className="content">
												<p>
													<a href="#">@calkanchrist</a> replied 53 minutes ago &nbsp;
													<span className="tag">Question</span>
												</p>
											</div>
										</div>
										<div className="media-right">
											<span className="has-text-grey-light"><i className="fa fa-comments"></i> 13</span>
										</div>
									</div>
								</article>
								<article className="post">
									<h4>The Most Anticipated New Movies of 2022</h4>
									<div className="media">
										<div className="media-left">
											<p className="image is-32x32">
												<img src="http://bulma.io/images/placeholders/128x128.png" />
											</p>
										</div>
										<div className="media-content">
											<div className="content">
												<p>
													<a href="#">@browncowandgetouttahere</a> replied 3 hours ago &nbsp;
													<span className="tag">Question</span>
												</p>
											</div>
										</div>
										<div className="media-right">
											<span className="has-text-grey-light"><i className="fa fa-comments"></i> 2</span>
										</div>
									</div>
								</article>
								<article className="post">
									<h4>'Doctor Strange' in the Multiverse of Madness</h4>
									<div className="media">
										<div className="media-left">
											<p className="image is-32x32">
												<img src="http://bulma.io/images/placeholders/128x128.png" />
											</p>
										</div>
										<div className="media-content">
											<div className="content">
												<p>
													<a href="#">@lowelbowel</a> replied 5 hours ago &nbsp;
													<span className="tag">Question</span>
												</p>
											</div>
										</div>
										<div className="media-right">
											<span className="has-text-grey-light"><i className="fa fa-comments"></i> 2</span>
										</div>
									</div>
								</article>
								<article className="post">
									<h4>Why Lana Wachowski Won't Explain 'The Matrix Resurrections'</h4>
									<div className="media">
										<div className="media-left">
											<p className="image is-32x32">
												<img src="http://bulma.io/images/placeholders/128x128.png" />
											</p>
										</div>
										<div className="media-content">
											<div className="content">
												<p>
													<a href="#">@garboy</a> replied 3 hours ago &nbsp;
													<span className="tag">Question</span>
												</p>
											</div>
										</div>
										<div className="media-right">
											<span className="has-text-grey-light"><i className="fa fa-comments"></i> 2</span>
										</div>
									</div>
								</article>
							</div>
						</div>
					</div>
				</section>
				<footer className="footer">
					<div className="container">
						<div className="content has-text-centered">
							<div className="columns is-mobile is-centered">
								<div className="field is-grouped is-grouped-multiline">
									<div className="control">
										<div className="tags has-addons">
											<a className="tag is-link" href="https://github.com/BulmaTemplates/bulma-templates">jusMDB</a>
											<span className="tag is-light">Your Movie Database</span>
										</div>
									</div>
									<div className="control">
										<div className="tags has-addons">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</footer>

			</div>
		);
	}
}

export default Top;