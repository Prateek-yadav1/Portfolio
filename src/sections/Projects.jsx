import React, { useState } from 'react';
import mediconnect from '../assets/image.png';
import AI from '../assets/image2.png';
import BB from '../assets/image3.png';

const projects = [
	{
		title: 'MediConnect',
		desc: 'Full-stack healthcare appointment system with authentication, role-based access, and secure REST APIs.',
		tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'WebRTC'],
		link: 'https://mediconnect-4dbu.onrender.com/',
		github: 'https://github.com/Prateek-yadav1/MediConnect-CB-_MainProject',
		image: mediconnect, // Use the imported image here
		category: 'Full Stack',
		color: 'from-cyan-500 to-blue-600',
	},
	{
  title: 'Fintech Trading Dashboard',
  desc: 'A responsive fintech dashboard inspired by Kotak Neo, featuring real-time market insights, stock analytics, interactive charts, and a modern trading-style UI.',
  tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Chart.js'],
  link: 'https://kotak-neo-dashboard.example.com',
  github: 'https://github.com/Prateek-yadav1/Fintech-Market-Dashboard-Analysis',
  image: 'https://images.unsplash.com/photo-1642543348745-03b1219733d9?w=800&h=600&fit=crop',
  category: 'Frontend',
  color: 'from-emerald-500 to-teal-600',
}
,
	
{
  title: 'AI-Based 2048 Game Advisor',
  desc: 'An intelligent 2048 game assistant that analyzes the current board state and suggests optimal moves using heuristic-based decision logic, wrapped in a clean and interactive UI.',
  tech: ['React', 'JavaScript', 'Game Logic', 'Heuristic Algorithms'],
  link: 'https://ai-based-2048-game-advisor-ljs5.onrender.com',
  github: 'https://github.com/Prateek-yadav1/AI-Based_2048-game-Advisor',
  image: AI,
  category: 'Frontend',
  color: 'from-orange-500 to-red-600',
}

	,
	{
		title: 'BrandBuddies – Influencer & Brand Collaboration Platform',
		desc: 'A modern collaboration platform that connects brands with influencers, enabling campaign discovery, creator profiles, and seamless communication through an intuitive and responsive UI.',
		tech: ['React', 'Tailwind CSS', 'MongoDB', 'Framer Motion'],
		link: 'https://tasks.example.com',
		github: 'https://github.com/Prateek-yadav1/BrandBuddies',
		image: BB,
		category: 'Full Stack',
		color: 'from-green-500 to-emerald-600',
	},
  
];

const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

export default function Projects() {
	const [selectedCategory, setSelectedCategory] = useState('All');
	const [hoveredIndex, setHoveredIndex] = useState(null);

	const filteredProjects =
		selectedCategory === 'All'
			? projects
			: projects.filter((p) => p.category === selectedCategory);

	return (
		<section
			id="projects"
			className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4 relative overflow-hidden"
		>
			{/* Background elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-20 right-10 animate-pulse"></div>
				<div
					className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-20 left-10 animate-pulse"
					style={{ animationDelay: '1s' }}
				></div>
			</div>

			<div className="max-w-7xl mx-auto relative z-10">
				{/* Header */}
				<div
					className="text-center mb-16"
					style={{ animation: 'fadeInUp 0.6s ease-out' }}
				>
					<h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
						Featured Projects
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mb-6"></div>
					<p className="text-gray-400 text-lg max-w-2xl mx-auto">
						Explore my latest work in web development, from full-stack applications
						to creative frontend experiences
					</p>
				</div>

				{/* Category Filter */}
				<div
					className="flex flex-wrap justify-center gap-3 mb-12"
					style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}
				>
					{categories.map((category, index) => (
						<button
							key={index}
							onClick={() => setSelectedCategory(category)}
							className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${
								selectedCategory === category
									? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/50'
									: 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white border border-gray-700'
							}`}
						>
							{category}
						</button>
					))}
				</div>

				{/* Projects Grid */}
				<div className="grid md:grid-cols-2 gap-8">
					{filteredProjects.map((project, index) => (
						<div
							key={index}
							className="group relative"
							style={{
								animation: `fadeInUp 0.6s ease-out ${0.4 + index * 0.1}s both`,
							}}
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
						>
							{/* Card */}
							<div className="relative bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
								{/* Image Container */}
								<div className="relative h-64 overflow-hidden bg-gray-900">
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
									/>

									{/* Overlay on hover */}
									<div
										className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent transition-opacity duration-500 ${
											hoveredIndex === index ? 'opacity-100' : 'opacity-0'
										}`}
									>
										<div className="absolute bottom-4 left-4 right-4 flex gap-3">
											<a
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
												className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white text-center font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
											>
												<span>Live Demo</span>
												<svg
													className="w-4 h-4"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
													/>
												</svg>
											</a>
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
											>
												<svg
													className="w-5 h-5"
													fill="currentColor"
													viewBox="0 0 24 24"
												>
													<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
												</svg>
											</a>
										</div>
									</div>

									{/* Category Badge */}
									<div
										className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} text-white shadow-lg`}
									>
										{project.category}
									</div>
								</div>

								{/* Content */}
								<div className="p-6 space-y-4">
									{/* Title */}
									<h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
										{project.title}
									</h3>

									{/* Description */}
									<p className="text-gray-400 leading-relaxed">
										{project.desc}
									</p>

							

									{/* Tech Stack */}
									<div className="flex flex-wrap gap-2">
										{project.tech.map((tech, i) => (
											<span
												key={i}
												className="px-3 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
											>
												{tech}
											</span>
										))}
									</div>
								</div>

								{/* Decorative corner */}
								<div
									className={`absolute top-0 left-0 w-20 h-20 bg-gradient-to-br ${project.color} opacity-5 rounded-br-full`}
								></div>
							</div>
						</div>
					))}
				</div>

				{/* View More Button
				<div
					className="text-center mt-16"
					style={{ animation: 'fadeInUp 0.6s ease-out 1s both' }}
				>
					<button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50">
						<span className="relative z-10 flex items-center gap-2">
							View All Projects
							<svg
								className="w-5 h-5 group-hover:translate-x-1 transition-transform"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								/>
							</svg>
						</span>
						<div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
					</button>
				</div> */}
			</div>

			<style jsx>{`
				@keyframes fadeInUp {
					from {
						opacity: 0;
						transform: translateY(30px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
			`}</style>
		</section>
	);
}