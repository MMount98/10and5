//customCSS File
import "../customCSS/underlineAnimation.css"; 

export default function Homepage() {
  return (
    <div className="text-center mt-5">
      <a href="#" className="underlineAnimation">
        <span>Hover over me!</span>
      </a>
    </div>
  );
}

