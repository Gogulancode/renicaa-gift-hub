import { Card, CardContent } from '@/components/ui/card';

const steps = [
	{
		number: '1',
		title: 'Choose Your Gifts',
		description: 'Curated selection of premium items for every occasion.',
		icon: '🎁',
	},
	{
		number: '2',
		title: 'Personalize Experience',
		description: 'Add custom messages and branding for a unique touch.',
		icon: '📝',
	},
	{
		number: '3',
		title: 'Send & Track',
		description: 'We deliver and you monitor delivery and engagement.',
		icon: '🚚',
	},
];

const HowItWorks = () => (
	<section id="how-it-works" className="py-16 bg-background">
		<div className="max-w-5xl mx-auto px-4">
			<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-renicaa-green">
				How It Works
			</h2>
			<div className="grid md:grid-cols-3 gap-8">
				{steps.map((step, idx) => (
					<div
						key={idx}
						className="flex flex-col items-center bg-background rounded-xl shadow-md p-8 transition-transform hover:-translate-y-2 hover:shadow-lg border border-border"
					>
						<div className="flex items-center justify-center w-16 h-16 rounded-full bg-renicaa-green/10 mb-4 text-3xl">
							{step.icon}
						</div>
						<div className="text-renicaa-green font-bold text-lg mb-2">
							Step {step.number}
						</div>
						<h3 className="text-xl font-semibold mb-2 text-center text-foreground">
							{step.title}
						</h3>
						<p className="text-muted-foreground text-center">
							{step.description}
						</p>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default HowItWorks;
