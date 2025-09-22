package portfolio.demo.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
 
    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("nombre", "José Robledillo Meléndez");
        model.addAttribute("descripcion", "SOFTWARE DEVELOPER");
        return "index"; // Mapea a src/main/resources/templates/index.html
    }

}
