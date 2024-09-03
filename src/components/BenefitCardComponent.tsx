// import { FileText, Users, Bot, Award } from "lucide-react"\
import FileText from '../assets/icons/FileText.svg';
import Users from '../assets/icons/UsersVector.svg';
import Bot from '../assets/icons/Bot.svg';
import Award from '../assets/icons/Award.svg';


interface BenefitCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="bg-[#F8F9FD] px-6 py-12 rounded-xl shadow-sm flex flex-col justify-between items-start gap-4 ">
      <div className="text-green-500 mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-base leading-[24px] font-semibold">{description}</p>
    </div>
  )
}

export default function BenefitCardComponent() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-28 min-h-screen ">
        <h2 className="text-3xl font-bold text-center mb-12">
            Why Participate in <span className="text-green-500">AI Challenges</span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BenefitCard
            icon={<img src={FileText} alt="FileText" />}
            title="Prove your skills"
            description="Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions."
            />
            <BenefitCard
            icon={<img src={Users} alt="Users" />}
            title="Learn from community"
            description="One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them."
            />
            <BenefitCard
            icon={<img src={Bot} alt="Bot" />}
            title="Challenge yourself"
            description="There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder."
            />
            <BenefitCard
            icon={<img src={Award} alt="Award" />}
            title="Earn recognition"
            description="You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards."
            />
        </div>
        </div>
    )
}